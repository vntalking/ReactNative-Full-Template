const AppLang = {
  common: {
    nameApp: 'ĐIỀU HÀNH NỘI BỘ STC',
    defaultTitleModal: 'Thông báo',
    defaultErrorTitle: 'Error!',
    defaultSuccessTitle: 'Success!',
    emptyList: 'Không có dữ liệu',
    required: 'Bắt buộc',
    functionUpdating:
      'Chức năng đang được nâng cấp.\nXin lỗi vì sự bất tiện này',
    errors: {
      somethingWentWrong: 'Lỗi máy chủ hoặc không có kết nối Internet!',
      thisIsRequired: 'Thông tin bắt buộc',
      allFieldsRequired: 'Vui lòng nhập tất cả thông tin',
      allFieldMarkRequired: 'Vui lòng nhập các thông tin bắt buộc',
      passwordNotMatching: 'Mật khẩu không giống nhau.'
    },
    logout: {
      title: 'Đăng xuất',
      body: 'Bạn có muốn đăng xuất?',
    },
    delete: {
      title: 'Xóa',
      body: 'Bạn có chắc chắn muốn xóa?',
    },
    update: {
      title: 'CẬP NHẬT',
      body: 'Đã có bản cập nhật mới.',
    },
    buttonSave: 'Lưu',
    buttonUpdate: 'Cập nhật',
    buttonCancel: 'Huỷ',
    buttonDelete: 'Xoá',
    forgotPassword: {
      title: 'Bạn bị quên mật khẩu?',
      body: 'Nhấn nút OK để hệ thống liên hệ với quản trị viên hỗ trợ lấy mật khẩu mới'
    }
  },
  home: {
    features:{
      analysis: "Thống kê",
      timekeeping: "Chấm công",
      budget: "Thu chi",
      survey: "Khảo sát",
      calendar: "Lịch công tác",
      meeting: "Giao ban",
      public_budget: "Công khai ngân sách",
      user: "Tài khoản",
      emulation: "Thi đua",
      publicBudget: "Ngân sách"
    }
  },
  profile: {
    dialog: {
      changePassword:{
        title: "Chúc mừng",
        body: "Bạn đã thay đổi mật khẩu thành công"
      }
    }
  },
  survey: {
    dialog: {
      participateSubmit: {
        title: "Chúc mừng",
        body: "Đã gửi thành công. Cám ơn bạn đã tham gia khảo sát."
      }
    }
  },
  emulation: {
    dialog: {
      success: {
        title: "Thông báo",
        body: "Bạn đã chấm điểm thi đua thành công"
      },
      error: {
        title: "Đã có lỗi!",
        body: "Quá trình chấm điểm bị thất bại, bạn hãy thử lại!"
      }
    }
  },
  timekeeping: {
    dialog: {
      checkin: {
        title: "Xin cám ơn",
        body: "Bạn đã chấm công thành công"
      },
      approve: {
        title: "Xin cám ơn",
        body: "Bạn đã duyệt bảng chấm công thành công"
      },
      error: {
        checkinFailed: "Quá trình chấm công bị thất bại, bạn hãy thử lại!",
        title: "Đã có lỗi!"
      }
    }
  },
};

export default AppLang;
