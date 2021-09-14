import {baseUrl} from './BaseURL'

const baseSurveyURL = `${baseUrl}private/surveys`;

export default {
    API_GET_SURVEYS: `${baseSurveyURL}/account`,
    API_GET_SURVEY_RESULT: `${baseSurveyURL}/results`,
    API_GET_SURVEY_PARTICIPATE: `${baseSurveyURL}`,
    API_POST_SURVEY_PARTICIPATE: `${baseSurveyURL}/results`,
}