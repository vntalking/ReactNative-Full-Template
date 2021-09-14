import * as EmulationsActionType from '../actionTypes/EmulationsActionType';

export * from '../../actions';
export * from '../../sagas/actions/DropdownsActions';
/**
 * Lấy danh sách thi đua
 * @param {*} showLoading 
 * @param {*} data 
 * @param {*} callback 
 * @returns 
 */
export function getEmulations(showLoading, data, callback) {
    return {
      type: EmulationsActionType.GET_EMULATION,
      payload: {showLoading, data, callback},
    };
  }

/**
 * Văn phòng tổng hợp
 * @param {*} showLoading 
 * @param {*} data 
 * @param {*} callback 
 * @returns 
 */
export function getGeneralOffices(showLoading, data, callback) {
    return {
      type: EmulationsActionType.OFFICE_EMULATION,
      payload: {showLoading, data, callback},
    };
  }
  /**
   * Tổng hợp điểm thi đua
   * @param {*} showLoading 
   * @param {*} data 
   * @param {*} callback 
   * @returns 
   */
export function reportEmulations(showLoading, data, callback) {
    return {
      type: EmulationsActionType.REPORT_EMULATION,
      payload: {showLoading, data, callback},
    };
  }

/**
 * Thêm mới 1 thi đua
 * @param {*} showLoading 
 * @param {*} data 
 * @param {*} callback 
 * @returns 
 */
export function addEmulations(showLoading, data, callback) {
    return {
      type: EmulationsActionType.POST_EMULATION,
      payload: {showLoading, data, callback},
    };
  }

/**
 * Chỉnh sửa 1 thi đua
 * @param {*} showLoading 
 * @param {*} data 
 * @param {*} callback 
 * @returns 
 */
export function editEmulations(showLoading, data, callback) {
    return {
      type: EmulationsActionType.PUT_EMULATION,
      payload: {showLoading, data, callback},
    };
  }

/**
 * Xóa 1 thi đua
 * @param {*} showLoading 
 * @param {*} data 
 * @param {*} callback 
 * @returns 
 */
export function deleteEmulations(showLoading, data, callback) {
    return {
      type: EmulationsActionType.DELETE_EMULATION,
      payload: {showLoading, data, callback},
    };
  }

/**
 * Chi tiết 1 thi đua theo ID
 * @param {*} showLoading 
 * @param {*} data 
 * @param {*} callback 
 * @returns 
 */
export function getEmulationDetail(showLoading, data, callback) {
    return {
      type: EmulationsActionType.GET_EMULATION_DETAIL,
      payload: {showLoading, data, callback},
    };
  }

/**
 * Lấy bộ chỉ tiêu thi đua theo Group_Id
 * @param {*} showLoading 
 * @param {*} data 
 * @param {*} callback 
 * @returns 
 */
export function getEmulationGroupTarget(showLoading, data, callback) {
    return {
      type: EmulationsActionType.GET_EMULATION_GROUP_TARGET,
      payload: {showLoading, data, callback},
    };
  }

/**
 * Lấy danh sách các nhóm thi đua theo từng nhân viên
 * @param {*} showLoading 
 * @param {*} data 
 * @param {*} callback 
 * @returns 
 */
export function getEmulationGroupUser(showLoading, data, callback) {
    return {
      type: EmulationsActionType.GET_EMULATION_GROUP_USER,
      payload: {showLoading, data, callback},
    };
  }
  