import {baseUrl} from './BaseURL'

const baseEmulationURL = `${baseUrl}private/emulation`;

export default {
    API_GET_EMULATION: `${baseEmulationURL}`,
    API_POST_EMULATION: `${baseEmulationURL}`,
    API_PUT_EMULATION: `${baseEmulationURL}`,
    API_DELETE_EMULATION: `${baseEmulationURL}`,
    API_REPORT_EMULATION: `${baseEmulationURL}/reportbydepartment`,
    API_OFFICE_EMULATION: `${baseEmulationURL}/office`,
    API_GET_EMULATION_DETAIL: `${baseEmulationURL}/detail`,
    API_GET_EMULATION_GROUP_TARGET: `${baseEmulationURL}/grouptarget`,
    API_GET_EMULATION_GROUP_USER: `${baseEmulationURL}/group/byemployee`,

}