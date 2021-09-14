import {baseUrl} from './BaseURL';

const baseRevenueURL = `${baseUrl}private/revenues`;

export default {
  API_GET_REVENUES: `${baseRevenueURL}/get_revenue`,
  API_GET_REVENUES_STATICAL: `${baseRevenueURL}/get_statical_year`,
};
