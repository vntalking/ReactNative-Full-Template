import {StyleSheet} from 'react-native';
import AppColors from '../../config/colors';
import hexToRgba from 'hex-to-rgba';

const Styles = StyleSheet.create({
  container: {},
  modalWrapper: {
    padding: 0,
    margin: 0,
    alignItems: 'center',
  },
  loader: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalWrapperNotBlock: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 1000,
    backgroundColor: hexToRgba(AppColors.black, 0.3),
  },
  modalWrapperNotBlockNoOverlay: {
    backgroundColor: AppColors.transparent,
  },
  text: {
    marginBottom: 30,
    color: AppColors.white,
    fontSize: 18,
  },
});

export default Styles;
