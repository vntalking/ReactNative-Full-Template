import axios from 'axios';
import getAuthToken from '~/libs/getAuthToken';

const BASE_URL = "";

axios.defaults.headers = {
  'Cache-Control': 'no-cache, no-store, must-revalidate',
  Pragma: 'no-cache',
  Accept: '*/*',
};

/**
 * Axios là thư viện hỗ trợ kết nối HTTP request.
 * Tạo hàm wrapper axios để gọi axios đơn giản và dễ hiểu hơn.
 * @param {*} url - endpoint của API
 * @param {*} method - kiểu HTTP request: GET, POST, UPDATE, DELETE...
 * @param {*} params - tham số truyền vào cho request
 * @returns axios instance
 */
export default async function callApi(isPrivated, url, method, params) {
  let headers = {
    'cache-control': 'no-cache',
    'Content-Type': 'application/json; charset=utf-8',
    device: 'MOBILE',
    client: Platform.OS,
  };
  // Chỉ những API cần xác thực mới đính kèm token vào header
  if(isPrivated) {
    headers = {
      ...headers,
      'x-access-token': await getAuthToken(),
    }
  }
  let options = {
    headers,
    baseURL: BASE_URL,
    method,
    url,
    params,
    timeout: 15 * 1000
  };
  console.log('param request: ' + JSON.stringify(options));
  return axios(options);
};