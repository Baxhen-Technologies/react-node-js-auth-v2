// *important*
// remover api se rodar sem o docker compose
// de { url: 'api', subUrl: 'login' } para { url: 'login', subUrl: '' }

export const URLS = {
  LOGIN: { url: 'api', subUrl: 'login' },
  SIGN_UP: { url: 'api', subUrl: 'signup' },
  RECOVER_PASSWORD: { url: 'api', subUrl: 'forgot_password' },
  RESET_PASSWORD: { url: 'api', subUrl: 'reset_password' },
  VERIFY_EMAIL: { url: 'api', subUrl: 'verify_email' },
};

export const getEndpointURL = (key) => {
  let finalUrl = '';
  if (key && URLS[key]) {
    const urlKey = URLS[key];
    if (urlKey.url) {
      finalUrl = urlKey.url;
    }
    if (urlKey.subUrl && urlKey.subUrl.length > 0) {
      finalUrl += `/${urlKey.subUrl}`;
    }
  }
  return finalUrl;
};
