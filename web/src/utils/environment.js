// *important*
// quando rodar sem o docker colocar endereço e porta do backend
// const BASE_URL = 'http://localhost:5000/';

// quando rodar com docker-compose
const BASE_URL = process.env.REACT_APP_WEB_URL;

export { BASE_URL };
