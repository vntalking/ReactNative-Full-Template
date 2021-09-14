var SERVER = 'http://ttdhnbstcapi.vnptthainguyen.vn/';
// var SERVER = 'localhost/';
const PREFIX = 'api/private';

// Survey prefix
const PREFIX_SURVEY = '/surveys';

export default {
  API_LOGIN: SERVER + 'api/public/auth/login',
  API_REGISTER: SERVER + 'api/public/auth/signup',
  API_DELETE_TOKEN_GG: SERVER + 'api/private/accounts/logout',
  API_SUBMIT_XXX: SERVER + 'api/xxx',

  API_GET_SURVEYS: `${SERVER}${PREFIX}${PREFIX_SURVEY}/account`,
  API_CHANGE_PASSWORD: `${SERVER}${PREFIX}/accounts`,
};
