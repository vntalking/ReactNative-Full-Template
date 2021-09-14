import {baseUrl} from './BaseURL'

const baseDropdownsUrl = `${baseUrl}private/dropdowns`;

export default {
    API_GET_ITEMS_TREE: `${baseDropdownsUrl}/items`,
    API_GET_DROPDOWN_DATA: `${baseDropdownsUrl}`,
    API_GET_EMPLOYEE_BY_DEPARTMENT:`${baseDropdownsUrl}/employeebydepartment`,
    API_GET_DEPARTMENTS_BYUSER_DROPDOWN:`${baseUrl}private/departments/list_department_byuser`
}