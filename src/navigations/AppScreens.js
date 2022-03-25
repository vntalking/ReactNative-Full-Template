/****************************************************************************
 * Danh sách tên tất cả màn hình có trong ứng dụng.
 * Tên các màn hình có giá trị đặt theo quy tắc: {Tên module}.{Tên màn hình}
 ****************************************************************************/

const APP_NAME = {
    HOME: 'Home',
    ABOUT: { // Danh sách các màn hình trong module About.
        INDEX: 'About.Index',
        DETAIL: 'About.Detail'
    }

}

module.exports = APP_NAME;