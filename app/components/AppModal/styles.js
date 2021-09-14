import {StyleSheet} from 'react-native';
import AppColors from '../../config/colors';
import pixel from '../../lib/pixel';
import AppValues from '../../config/values';
import AppFonts from '../../config/fonts';

const Styles = StyleSheet.create({
  modal: {
    padding: AppValues.padding,
    zIndex: 9000,
  },
  container: {
    width: '100%',
    alignSelf: 'center',
    minHeight: pixel(100),
    backgroundColor: AppColors.white,
    borderRadius: pixel(16),
    padding: pixel(20),
  },
  iconWrapper: {
    alignItems: 'center',
    marginBottom: AppValues.padding / 1.5,
  },
  icon: {
    backgroundColor: AppColors.white,
    height: pixel(40),
    width: pixel(40),
    borderRadius: pixel(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  iconCom: {
    height: pixel(40),
    width: pixel(40),
    borderRadius: pixel(20),
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconComSuccess: {
    backgroundColor: AppColors.secondary2,
  },
  iconComError: {
    backgroundColor: AppColors.danger,
  },
  iconComWarning: {
    backgroundColor: AppColors.primary,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    marginTop: AppValues.padding,
  },
  button: {
    //flex: 1,
    width: '50%',
    marginTop: pixel(15),
    marginLeft: AppValues.padding / 2,
    marginRight: AppValues.padding / 2,
    backgroundColor: AppColors.primary,
    borderWidth: 0,
  },
  button1: {
    //flex: 1,
    width: '50%',
    marginTop: pixel(15),
    marginLeft: AppValues.padding / 2,
    marginRight: AppValues.padding / 2,
    borderWidth: pixel(1),
  },
  titleCom: {
    paddingBottom: pixel(10),
  },
  title: {
    textAlign: 'center',
    ...AppFonts.bold,
    fontSize: pixel(17),
    color: AppColors.black,
  },
  message: {
    textAlign: 'center',
    ...AppFonts.medium,
    fontSize: pixel(18),
    color: AppColors.black,
  },
});

export default Styles;
