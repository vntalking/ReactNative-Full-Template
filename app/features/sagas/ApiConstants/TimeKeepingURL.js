import {baseUrl} from './BaseURL'

const baseTimeKeepingURL = `${baseUrl}private/timekeepings`;

export default {
    API_CHECK_IN: `${baseTimeKeepingURL}/timekeeping_online`,
    API_SEARCH_TIMESHEETS: `${baseTimeKeepingURL}/get_timekeeping`,
    API_UPDATE_DAY_TIMESHEETS: `${baseTimeKeepingURL}/update_timekeeping`,
    API_APPROVE_TIMESHEETS_OF_EMPLOYEE: `${baseTimeKeepingURL}/censorship_timekeeping`,
    API_APPROVE_TIMESHEETS_OF_DEPARTMENT: `${baseTimeKeepingURL}/censorship_timekeeping_department`,
    API_SUMMARY_TIMESHEET: `${baseTimeKeepingURL}/statistical_timekeeping`,
    API_CURRENTDAY_TIMEKEEPING: `${baseTimeKeepingURL}/get_timekeeping_day`
}