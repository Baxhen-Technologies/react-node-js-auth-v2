const path = require('path')
const EmailTemplate = require('email-templates')
const config = require('../config/config')
const sgMail = require('@sendgrid/mail');
const { pass, email } = config

sgMail.setApiKey(pass);
class Mailer {
  constructor(data) {
    this.email = email
    this.pass = pass
    this.local = data.local
    this.templateName = data.templateName
    this.options = {
      auth: {
        api_user: this.user,
        api_key: this.pass,
      },
    }
    this.sendEmail = this.sendEmail.bind(this)
  }

  async sendEmail() {
    try {
      const email = new EmailTemplate({
        views: {
          options: {
            extension: 'hbs',
          },
        },
      })

      const html = await email.render(
        path.join(__dirname, '..', 'templates', `${this.templateName}/html`),
        this.local,
      )
      const subject = await email.render(
        path.join(__dirname, '..', 'templates', `${this.templateName}/subject`),
        this.local,
      )
      const text = await email.render(
        path.join(__dirname, '..', 'templates', `${this.templateName}/text`),
        this.local,
      )

      sgMail.send({
        from: this.email,
        to: this.local.email,
        html,
        subject,
        text,
      },(err)=>{
        if(err) return err
        return null
      })
    } catch (error) {
      return error.message
    }
  }
}

module.exports = Mailer
