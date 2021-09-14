/* eslint-disable prettier/prettier */
import ApiConstants from './ApiConstants/DropdownsURL';
import {request, RequestType} from './Requester';
import {takeLatest} from 'redux-saga/effects';
import * as ActionTypes  from './actionTypes/DropdownsActionType'
import AsyncStorage from '@react-native-community/async-storage';

/**
 * Request lấy danh mục.
 * @param {*} param0 
 */
export function* getItemsTree({payload}) {
    const {showLoading, data, callback} = payload;
    const config = {
        showLoading: showLoading,
        type: RequestType.GET
    };
    
    try {
        const items = yield AsyncStorage.getItem(`items.${data.cat_code}`);
        if(items != null) {
            callback(JSON.parse(items));
        } else {
            // Not exist in local storage so make request to get from serve.
            yield request(ApiConstants.API_GET_ITEMS_TREE, config, data, (response) => {
                callback(response);
                AsyncStorage.setItem(`items.${data.cat_code}`, JSON.stringify(response));
            });
        }

    } catch (error) {
        console.log(error)
        // Error retrieving data. So should make request to get data from server
        yield request(ApiConstants.API_GET_ITEMS_TREE, config, data, (response) => {
            callback(response);
        });
     }
  }

  /**
   * Lấy dữ liệu cho các dropdowns
   * @param {*} param0 
   */
export function* getDropdowns({payload}) {
    const {showLoading, data, callback} = payload;
    const config = {
        showLoading: showLoading,
        type: RequestType.GET
    };

    const dropdownType = data.type;
    try {
        const data = yield AsyncStorage.getItem(`${dropdownType}`);
        if(data != null) {
            callback(JSON.parse(data));
        } else {
            // Not exist in local storage so make request to get from serve.
            yield request(`${ApiConstants.API_GET_DROPDOWN_DATA}/${dropdownType}`, config, data, (response) =>{
                callback(response);
                AsyncStorage.setItem(`${dropdownType}`, JSON.stringify(response));
            });
        }
    } catch (error) {
        // Error retrieving data. So should make request to get data from server
        yield request(`${ApiConstants.API_GET_DROPDOWN_DATA}/${dropdownType}`, config, data, (response) => {
            callback(response);
        });
    }
}

export function* getDepartmentsByUserDropdown({payload}) {
    const {showLoading, data, callback} = payload;
    const config = {
        showLoading: showLoading,
        type: RequestType.GET
    };

    yield request(`${ApiConstants.API_GET_DEPARTMENTS_BYUSER_DROPDOWN}`, config, data, (response) => {
        response = response.map(item => {
            return {
                value: item.id,
                label: item.name
            }
        })
        callback(response);
    });
}

/**
 * Lấy danh sách tất cả cán bộ theo từng phòng ban
 * @param {*} param0 
 */
export function* getEmployeeByDepartment({payload}) {
    const {showLoading, data, callback} = payload;
    const config = {
        showLoading: showLoading,
        type: RequestType.GET
    };

    yield request(ApiConstants.API_GET_EMPLOYEE_BY_DEPARTMENT, config, data, (response) => {
        callback(response);
    });
  }

  export const DropdownsSaga = [
    takeLatest(ActionTypes.GET_ITEMS_TREE, getItemsTree),
    takeLatest(ActionTypes.GET_DEPARTMENTS_DROPDOWN, getDropdowns),
    takeLatest(ActionTypes.GET_YEARS_DROPDOWN, getDropdowns),
    takeLatest(ActionTypes.GET_MONTHS_DROPDOWN, getDropdowns),
    takeLatest(ActionTypes.GET_STATUS_DROPDOWN, getDropdowns),
    takeLatest(ActionTypes.GET_EMPLOYEE_BY_DEPARTMENT, getEmployeeByDepartment),
    takeLatest(ActionTypes.GET_DEPARTMENTS_BYUSER_DROPDOWN, getDepartmentsByUserDropdown),
]
