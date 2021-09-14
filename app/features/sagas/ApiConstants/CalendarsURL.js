import {baseUrl} from './BaseURL'

const baseCalendarURL = `${baseUrl}private/ioffice`;

export default {
    API_GET_CALENDAR: `${baseCalendarURL}/calendarfromto`,
    API_GET_INVITATION_LETTER: `${baseCalendarURL}/inviteletters`,
    API_GET_INVITATION_LETTER_FILE: `${baseCalendarURL}/inviteletters/file`,
    API_SEND_SMS: `${baseCalendarURL}/sendsms`,
}