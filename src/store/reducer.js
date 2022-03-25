import {CommonReducer} from '~/modules/common/store/reducer';
import {HomeReducer} from '~/modules/home/store/reducer'

/**
 * Khai báo các sub reducer của các module con trong này
 */
export default Object.assign({
    CommonReducer: CommonReducer,
    HomeReducer: HomeReducer
});