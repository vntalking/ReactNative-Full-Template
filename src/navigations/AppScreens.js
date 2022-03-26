/****************************************************************************
 * Danh sách tên tất cả màn hình có trong ứng dụng.
 * Tên các màn hình có giá trị đặt theo quy tắc: {Tên module}.{Tên màn hình}
 ****************************************************************************/

const APP_NAME = {
    AUTH_GROUP: {
        NAME: 'Auth',
        SCREENS: {
            LOGIN: 'Login',
            SIGNUP: 'SignUp',
        }
    },
    PUBLIC_GROUP:{
        NAME: 'PUBLIC',
        SCREENS: {
            HELP: "Help",
            SPLASH: 'Splash'
        }
    },
    MAIN_GROUP: {
        NAME: 'Main',
        SCREENS: {
            HOME: 'Home',
            PROFILE: "Profile",
            MESSAGE: { // Danh sách các màn hình trong module Message.
                INBOX: 'Message.Inbox',
                DETAIL: 'Message.Detail'
            },
        }
    },
}

module.exports = APP_NAME;