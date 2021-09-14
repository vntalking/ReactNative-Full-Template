import {baseUrl} from './BaseURL'

const PREFIX_PUBLIC = 'public';
const PREFIX_PRIVATE = 'private';

export default {
    API_LOGIN: `${baseUrl}${PREFIX_PUBLIC}/auth/login`,
    API_CHANGE_PASSWORD: `${baseUrl}${PREFIX_PRIVATE}/accounts`,

}