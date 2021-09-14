import {StyleSheet} from 'react-native';
import AppColors from '../../config/colors';
import AppValues from '../../config/values';
import pixel from '../../lib/pixel';
import AppFonts from '../../config/fonts';
import hexToRgba from 'hex-to-rgba';
import {hdp} from '../../lib/responsive';

const Styles = StyleSheet.create({
  modalWrapper: {
    padding: 0,
    margin: 0,
  },
  modal: {
    flex: 1,
    // marginTop: hdp(50),
    backgroundColor: AppColors.white,
    paddingTop: AppValues.padding,
    paddingLeft: AppValues.padding,
    paddingRight: AppValues.padding,
    paddingBottom: AppValues.padding,
    borderTopLeftRadius: pixel(8), //wdp(2),
    borderTopRightRadius: pixel(8), //wdp(2),
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    maxHeight: hdp(90),
  },
  modalSearch: {
    marginTop: hdp(10),
    position: undefined,
    flex: 1,
    maxHeight: undefined,
  },
  selectContainer: {
    justifyContent: 'center',
  },
  inputNoText: {
    flex: 1,
    borderBottomColor: AppColors.lightGrey,
    borderBottomWidth: 1,
    padding: AppValues.padding / 2,
    paddingLeft: 0,
    paddingRight: AppValues.padding * 1.5,
    paddingTop: 0,
    paddingBottom: 0,
    justifyContent: 'center',
  },
  inputText: {
    ...AppFonts.regular,
    fontSize: pixel(14),
    color: AppColors.primary,
  },
  inputTextPH: {
    color: hexToRgba(AppColors.primary, 0.3),
  },
  pressZone: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    height: pixel(25), //wdp(8),
    zIndex: 1,
  },
  dropIconBlock: {
    position: 'absolute',
    top: pixel(10),
    right: pixel(5),
    height: pixel(20),
    justifyContent: 'center',
  },
  dropIcon: {
    color: AppColors.primary,
    fontSize: pixel(20), //wdp(4),
  },
  dateOverlay: {},
  selectList: {
    flex: 1,
  },
  selectDone: {
    marginLeft: AppValues.padding / 2,
    marginRight: AppValues.padding / 2,
    marginTop: AppValues.padding / 2,
  },
  selectItem: {
    backgroundColor: AppColors.white,
    borderRadius: pixel(5), //wdp(0.5),
    overflow: 'hidden',
    marginBottom: pixel(10), //wdp(1),
  },
  selectItemActive: {
    backgroundColor: hexToRgba(AppColors.primary, 0.1),
  },
  selectItemWrapper: {
    padding: AppValues.padding / 2,
  },
});

export default Styles;
