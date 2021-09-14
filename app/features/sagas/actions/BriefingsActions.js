import * as BriefingsActionType from '../actionTypes/BriefingsActionType';

export * from '../../actions';
export * from '../../sagas/actions/DropdownsActions';

export function searchConclusion(showLoading, data, callback) {
    return {
        type: BriefingsActionType.SEARCH_CONCLUSION,
        payload: {showLoading, data, callback},
    };
}