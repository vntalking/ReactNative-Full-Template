import axios from 'axios';

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
export default async function callApi(url, method, params) {
  let headers = {
    'cache-control': 'no-cache',
    'Content-Type': 'application/json; charset=utf-8',
    device: 'MOBILE',
    client: Platform.OS,
  };
  let options = {
    headers,
    baseURL: BASE_URL,
    method,
    url,
    params,
    timeout: 15 * 1000
  };
  return axios(options);
};