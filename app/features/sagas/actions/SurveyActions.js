import * as Surveytypes from '../actionTypes/SurveysActionType';

export * from '../../actions'
// Surveys
export function getSurveys(showLoading, data, callback) {
  return {
    type: Surveytypes.GET_SURVEYS,
    payload: {showLoading, data, callback},
  };
}

export function getSurveyResult(showLoading, data, callback) {
  return {
    type: Surveytypes.GET_SURVEY_RESULT,
    payload: {showLoading, data, callback},
  };
}

export function getSurveyParticipate(showLoading, data, callback) {
  return {
    type: Surveytypes.GET_SURVEY_PARTICIPATE,
    payload: {showLoading, data, callback},
  };
}

export function submitSurveyParticipate(showLoading, data, callback) {
  return {
    type: Surveytypes.POST_SURVEY_PARTICIPATE,
    payload: {showLoading, data, callback},
  };
}