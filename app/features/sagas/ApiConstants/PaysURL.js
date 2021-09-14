import {baseUrl} from './BaseURL';

const basePayURL = `${baseUrl}private/pays`;

export default {
  API_GET_PAYS: `${basePayURL}/get_pays`,
  API_GET_PAYS_STATICAL: `${basePayURL}/get_statical_year`,
};
