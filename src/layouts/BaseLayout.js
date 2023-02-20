import React, {memo} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dialog from "~/components/Dialog";
import { dismissExpiredTokenDialogAction , dismissUnknownErrorDialogAction} from '~/modules/common/store/actions';
import { logoutAction } from '~/modules/auth/store/actions';

const BaseLayout = props => {
  const dispatch = useDispatch();
  const isShowExpiredToken = useSelector(state => state.CommonReducer.expiredToken);
  const unknownErrorDialog = useSelector(state => state.CommonReducer.unknownErrorDialog);

  return (
    <>
      {/* Inject toàn bộ nội nội dung của component con vào đây */}
      {props.children}
      {/* Các UI thông báo toàn cục */}
      <Dialog 
        isShow={isShowExpiredToken} 
        icon="error"
        message="Phiên đăng nhập của bạn đã hết. Vui lòng đăng nhập lại!"
        onConfirm= {() => {
          // Dismiss dialog.
          dispatch(dismissExpiredTokenDialogAction());
          // Tiến hành logout
          dispatch(logoutAction());
        }}
      />

      <Dialog
        isShow={unknownErrorDialog?.isShow || false} 
        icon="error"
        title= {unknownErrorDialog?.title || "Đã có lỗi"}
        message= {unknownErrorDialog?.message || "Lỗi không xác định"}
        onConfirm= {() => dispatch(dismissUnknownErrorDialogAction())}
      />
    </>
  )

}

export default memo(BaseLayout);