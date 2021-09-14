import * as DropdownsActionType from '../actionTypes/DropdownsActionType';

export * from '../../actions';

export function getItemsTree(showLoading, data, callback) {
    return {
        type: DropdownsActionType.GET_ITEMS_TREE,
        payload: {showLoading, data, callback},
    };
}

/**
 * Lấy dữ liệu cho các dropdown.Phân biệt dropdown qua dropdownType
 * @param {*} showLoading 
 * @param {*} data 
 * @param {*} callback 
 * @returns 
 */
export function getDepartmentsDropdown(showLoading, callback) {
  const data = {type: `departments`};
  return {
    type: DropdownsActionType.GET_DEPARTMENTS_DROPDOWN,
    payload: {showLoading, data, callback},
  };
}

/**
 * Lấy danh sách các phòng ban mà tài khoản (user) được cấp quyền - vd: trưởng phòng
 * @param {*} showLoading 
 * @param {*} callback 
 * @returns 
 */
export function getDepartmentsByUserDropdown(showLoading, callback) {
  const data = {department_type: `1`};
  return {
    type: DropdownsActionType.GET_DEPARTMENTS_BYUSER_DROPDOWN,
    payload: {showLoading, data, callback},
  };
}

export function getYearsDropdown(showLoading, callback) {
  const data = {type: `years`};
  return {
    type: DropdownsActionType.GET_YEARS_DROPDOWN,
    payload: {showLoading, data, callback},
  };
}

export function getMonthsDropdown(showLoading, callback) {
  const data = {type: `months`};
  return {
    type: DropdownsActionType.GET_MONTHS_DROPDOWN,
    payload: {showLoading, data, callback},
  };
}

export function getStatusDropdown(showLoading, callback) {
  const data = {type: `status`};
  return {
    type: DropdownsActionType.GET_STATUS_DROPDOWN,
    payload: {showLoading, data, callback},
  };
}

export function getEmployeeByDepartment(showLoading, data, callback) {
    return {
        type: DropdownsActionType.GET_EMPLOYEE_BY_DEPARTMENT,
        payload: {showLoading, data, callback},
    };
}

