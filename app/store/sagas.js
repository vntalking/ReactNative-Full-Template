import {all} from 'redux-saga/effects';
import {MainSagas} from '../features/sagas';
import {SurveysSagas} from '../features/sagas/SurveySaga';
import {CalendarSaga} from '../features/sagas/CalendarSaga';
import {EmulationSaga} from '../features/sagas/EmulationSaga';
import {BudgetsSagas} from '../features/sagas/BudgetSaga';
import {DropdownsSaga} from '../features/sagas/DropdownsSaga';
import {BudgetReportSaga} from '../features/sagas/BudgetReportSaga';
import {BriefingsSaga} from '../features/sagas/BriefingsSaga';
import {TimeKeepingSagas} from '../features/sagas/TimeKeepingSaga';
import {iOfficesSagas} from '../features/sagas/IOfficeSaga';
import {NotificationSagas} from '../features/notification/sagas';

export default function* rootSaga() {
  yield all([
    ...MainSagas,
    ...SurveysSagas,
    ...CalendarSaga,
    ...EmulationSaga,
    ...BudgetsSagas,
    ...DropdownsSaga,
    ...BudgetReportSaga,
    ...BriefingsSaga,
    ...TimeKeepingSagas,
    ...BriefingsSaga,
    ...iOfficesSagas,
    ...NotificationSagas,
  ]);
}
