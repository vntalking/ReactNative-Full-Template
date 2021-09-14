import axios from 'axios';
import getAuthToken from '../lib/getAuthToken';
axios.defaults.headers = {
  'Cache-Control': 'no-cache, no-store, must-revalidate',
  Pragma: 'no-cache',
  //Accept: 'application/json',
  Accept: '*/*',
};

export default async function api(
  url,
  method,
  dataOrParams = null,
  useIDToken = true,
  headersOverwrite = null,
  optionsOverwrite = null,
) {
  if (!method) {
    method = 'get';
  }
  let headers = {
    'cache-control': 'no-cache',
    'Content-Type': 'application/json; charset=utf-8',
  };
  if (useIDToken) {
    const token = await getAuthToken();
    headers = {
      ...headers,
      'x-access-token': token,
    };
  }

  headers = {
    ...headers,
    device: 'MOBILE',
    client: '' + Platform.OS,
  };
  
  if (headersOverwrite) {
    headers = {
      ...headers,
      ...headersOverwrite,
    };
  }
  let options = {
    headers,
    method,
    url,
    // httpsAgent: new https.Agent({
    //   rejectUnauthorized: false,
    // }),
    timeout: 15 * 1000,
  };
  if (optionsOverwrite) {
    options = {
      ...options,
      ...optionsOverwrite,
    };
  }
  if (dataOrParams) {
    if (method.toLowerCase() === 'get') {
      options.params = dataOrParams;
    } else {
      options.data = dataOrParams;
      // options.body = dataOrParams;
      // options.params = dataOrParams;
    }
  }
  let optionsLog = {...options};
  optionsLog.headers = {};
  console.log('----------------------------------------------');
  console.log('param request: ' + JSON.stringify(options));
  return axios(options);
}
