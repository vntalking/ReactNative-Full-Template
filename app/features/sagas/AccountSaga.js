/* eslint-disable prettier/prettier */
import ApiConstants from './ApiConstants/AccountsURL';
import {request} from './Requester';

/**
 * Request cập nhật mật khẩu người người dùng.
 * @param {*} param0 
 */
export function* changePassword({payload}) {
    const {showLoading, data, callback} = payload;

    const config = {
        showLoading: showLoading,
        type: 'PUT'
    }

    yield request(ApiConstants.API_CHANGE_PASSWORD, config, data, (response) => {
        callback(response);
    })

}