import * as BudgetReportActionType from '../actionTypes/BudgetReportActionType';
import * as DropdownsActionType from '../actionTypes/DropdownsActionType';

export * from '../../actions';

export function searchReport(showLoading, data, callback) {
    return {
        type: BudgetReportActionType.SEARCH_REPORT,
        payload: {showLoading, data, callback},
    };
}

export function getListCategories(showLoading, data, callback) {
    return {
        type: DropdownsActionType.GET_ITEMS_TREE,
        payload: {showLoading, data, callback},
    };
}