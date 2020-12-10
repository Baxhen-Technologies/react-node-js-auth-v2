module.exports = {
  secret: process.env.JWT_SECRET || 'JWT_SECRET is not provided',
  webUrl: process.env.WEB_URL || 'WEB_URL is not provided',
  email: process.env.EMAIL || 'EMAIL is not provided',
  pass: process.env.SEND_GRID_API_KEY || 'SEND_GRID_API_KEY is not provided',
  mongoUri: process.env.MONGO_URI || 'MONGO_URI is not provided',
  dbName: process.env.DB_NAME || 'DB_NAME is not provided',
  companyName: process.env.COMPANY_NAME || 'COMPANY_NAME is not provided',
  facebookUrl: process.env.FACEBOOK_URL || 'FACEBOOK_URL is not provided',
  centralAjudaUrl:
    process.env.CENTRAL_AJUDA_URL || 'CENTRAL_AJUDA_URL is not provided',
}
