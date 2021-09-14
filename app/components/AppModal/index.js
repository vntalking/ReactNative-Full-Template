import React from 'react';
import {View, Text} from 'react-native';
import Styles from './styles';
import Modal from 'react-native-modal';
import IconSuccess from '../../assets/svg/icon_check.svg';
import IconError from '../../assets/svg/icon_cross.svg';
import IconWarning from '../../assets/svg/icon_warning.svg';
import AppButton from '../AppButton';
import pixel from '../../lib/pixel';

let Props = {
  icon: "",
  visible: false,
  showTitle: false,
  showConfirmButton: false,
  confirmButtonText: "",
  onConfirm: () => {},
  showCancelButton: false,
  cancelButtonText: "",
  onCancel: () => {},
  title: "",
  message: "",
};

export default class AppModal extends React.PureComponent {
  static defaultProps = {
    icon: '',
    customIcon: null,
    visible: true,
    showTitle: false,
    showConfirmButton: false,
    confirmButtonText: 'OK',
    onConfirm: () => {},
    showCancelButton: false,
    cancelButtonText: 'Đóng',
    onCancel: () => {},
    title: '',
    message: '',
  };

  render() {
    let IconCom = null;
    if (this.props.icon === 'success') {
      IconCom = SuccessIcon;
    }
    if (this.props.icon === 'error') {
      IconCom = ErrorIcon;
    }
    if (this.props.icon === 'warning') {
      IconCom = WarningIcon;
    }
    let message = this.props.message ?? '';
    if (this.props.message && this.props.message.length > 250) {
      message = this.props.message.substring(0, 250);
      message += '...';
    }
    return (
      <Modal
        backdropTransitionOutTiming={0}
        backdropTransitionInTiming={0}
        style={Styles.modal}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropOpacity={0.5}
        useNativeDriver
        onModalHide={this._clearMessage}
        isVisible={this.props.visible}>
        <View style={Styles.container}>
          {IconCom ? (
            <View style={Styles.iconWrapper}>
              <View style={Styles.icon}>
                <IconCom />
              </View>
            </View>
          ) : null}
          {this.props.showTitle &&
          this.props.title &&
          this.props.title.length > 0 ? (
            <View style={Styles.titleCom}>
              <Text style={Styles.title}>{this.props.title}</Text>
            </View>
          ) : null}
          <Text style={Styles.message}>{message}</Text>
          {this.props.showCancelButton || this.props.showConfirmButton ? (
            <View style={Styles.buttons}>
              {this.props.showCancelButton ? (
                <AppButton
                  style={Styles.button1}
                  label={this.props.cancelButtonText}
                  onPress={this.props.onCancel}
                  colorSet={'secondary'}
                />
              ) : null}
              {this.props.showConfirmButton ? (
                <AppButton
                  style={Styles.button}
                  label={this.props.confirmButtonText}
                  onPress={this.props.onConfirm}
                />
              ) : null}
            </View>
          ) : null}
        </View>
      </Modal>
    );
  }
}

class SuccessIcon extends React.Component {
  render() {
    return (
      <View style={[Styles.iconCom, Styles.iconComSuccess]}>
        <IconSuccess width={pixel(16)} height={pixel(12)} />
      </View>
    );
  }
}

class ErrorIcon extends React.Component {
  render() {
    return (
      <View style={[Styles.iconCom, Styles.iconComError]}>
        <IconError width={pixel(16)} height={pixel(12)} />
      </View>
    );
  }
}

class WarningIcon extends React.Component {
  render() {
    return (
      <View style={[Styles.iconCom, Styles.iconComWarning]}>
        <IconWarning width={pixel(20)} height={pixel(20)} />
      </View>
    );
  }
}
