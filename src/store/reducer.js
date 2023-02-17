import {AuthReducer} from '~/modules/auth/store/reducer';
import {HomeReducer} from '~/modules/home/store/reducer';
import { CommonReducer } from '~/modules/common/store/reducer';

/**
 * Khai báo các sub reducer của các module con trong này
 */
export default Object.assign({
    AuthReducer: AuthReducer,
    HomeReducer: HomeReducer,
    CommonReducer: CommonReducer
});