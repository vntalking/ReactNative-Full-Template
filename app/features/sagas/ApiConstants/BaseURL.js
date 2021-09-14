import AppEnv from '../../../config/env';

const SERVER = AppEnv.API_ENDPOINT;

const PREFIX = 'api/';
const baseUrl = `${SERVER}${PREFIX}`

export {
    baseUrl
}; 
