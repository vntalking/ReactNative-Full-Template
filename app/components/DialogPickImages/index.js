/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Styles from './styles';
import Modal from 'react-native-modal';
import AppButton from '../AppButton';
import pixel from '../../lib/pixel';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppColors from '../../config/colors';
import AppFonts from '../../config/fonts';
import ImagePicker from 'react-native-image-crop-picker';

type Props = {
  icon: string,
  visible: boolean,
  showTitle: boolean,
  showConfirmButton: boolean,
  confirmButtonText: string,
  onConfirm: void,
  showCancelButton: boolean,
  cancelButtonText: string,
  onCancel: void,
  title: string,
  message: string,
  onRespon: void,
};

type State = {
  showModal: boolean,
};

export default class DialogPickImages extends React.PureComponent<Props> {
  static defaultProps = {
    icon: '',
    customIcon: null,
    visible: true,
    showTitle: false,
    showConfirmButton: false,
    confirmButtonText: 'OK',
    onConfirm: () => {},
    showCancelButton: false,
    cancelButtonText: 'CANCEL',
    onCancel: () => {},
    title: '',
    message: '',
  };
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  showModal = () => {
    this.setState({showModal: true});
  };

  _hideModal = () => {
    this.setState({showModal: false});
  };

  _openCamera = () => {
    ImagePicker.openCamera({
      cropping: true,
    }).then(image => {
      console.log(image);
      this.props.onRespon([image]);
      this._hideModal();
    });
  };
  _pickImage = () => {
    ImagePicker.openPicker({
      cropping: true,
    }).then(images => {
      console.log(images);
      this.props.onRespon([images]);
      this._hideModal();
    });
  };
  _pickMultiImages = () => {
    ImagePicker.openPicker({
      multiple: true,
    }).then(images => {
      console.log(images);
      this.props.onRespon(images);
      this._hideModal();
    });
  };

  render() {
    return (
      <Modal
        onBackButtonPress={this._hideModal}
        onBackdropPress={this._hideModal}
        backdropTransitionOutTiming={0}
        backdropTransitionInTiming={0}
        style={Styles.modal}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropOpacity={0.5}
        useNativeDriver
        isVisible={this.state.showModal}>
        <View style={Styles.container}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={this._openCamera}
              style={{
                flex: 50,
                aspectRatio: 1.3 / 1,
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <AwesomeIcon
                  name={'camera'}
                  size={27}
                  color={AppColors.white}
                  style={{
                    textAlignVertical: 'center',
                    backgroundColor: AppColors.secondary2,
                    borderRadius: pixel(50),
                    padding: pixel(13),
                  }}
                />
                <Text
                  style={{
                    marginTop: pixel(8),
                    fontSize: pixel(17),
                    color: AppColors.black,
                    ...AppFonts.regular,
                  }}>
                  Chụp ảnh
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this._pickImage}
              style={{
                flex: 50,
                aspectRatio: 1.3 / 1,
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <AwesomeIcon
                  name={'image'}
                  size={27}
                  color={AppColors.white}
                  style={{
                    textAlignVertical: 'center',
                    backgroundColor: AppColors.green1,
                    borderRadius: pixel(50),
                    padding: pixel(13),
                  }}
                />
                <Text
                  style={{
                    marginTop: pixel(8),
                    fontSize: pixel(17),
                    color: AppColors.black,
                    ...AppFonts.regular,
                  }}>
                  Chọn 1 ảnh
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this._pickMultiImages}
              style={{
                flex: 50,
                aspectRatio: 1.3 / 1,
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  name={'window-restore'}
                  size={27}
                  color={AppColors.white}
                  style={{
                    textAlignVertical: 'center',
                    backgroundColor: AppColors.orange,
                    borderRadius: pixel(50),
                    padding: pixel(13),
                  }}
                />
                <Text
                  style={{
                    marginTop: pixel(8),
                    fontSize: pixel(17),
                    color: AppColors.black,
                    ...AppFonts.regular,
                  }}>
                  Chọn nhiều ảnh
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}
