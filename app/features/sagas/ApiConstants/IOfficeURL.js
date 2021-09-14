import {baseUrl} from './BaseURL'

const baseiOfficeURL = `${baseUrl}private/ioffice`;

export default {
    API_SEND_DOCUMENTS_DASHBOARD: `${baseiOfficeURL}/sentdocuments`,
    API_RECEIVE_DOCUMENTS_DASHBOARD: `${baseiOfficeURL}/receivedocuments`,
    API_IGATE_DASHBOARD: `${baseUrl}private/igate/process`,
    API_PORTAL_DASHBOARD: `${baseUrl}private/portal/info`,
}