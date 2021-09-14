import {StyleSheet} from 'react-native';
import AppValues from '../../../config/values';
import AppColors from '../../../config/colors';
import pixel from '../../../lib/pixel';
import AppStyles from '../../../config/styles';
import hexToRgba from 'hex-to-rgba';
import AppFonts from '../../../config/fonts';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
    alignItems: 'center'
  },
  content: {
    flex: 1,
    backgroundColor: AppColors.white,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'center', 
  },
  logoBloc: {
    alignItems: 'center',
  },
  appLogo: {
    width: pixel(150),
    height: pixel(150),
  },
  appCompany: {
    width: pixel(150),
    height: pixel(150),
  },
  pageTitleBloc: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: AppValues.padding,
    marginBottom: AppValues.padding * 2,
  },
  pageTitleTextWithBloc: {
    ...AppStyles.pageTitle,
    textAlign: 'center',
  },
  pageTitle: {
    ...AppStyles.pageTitle,
    justifyContent: 'center', 
    alignSelf: 'center',
    textAlign: 'left',
    marginTop: AppValues.padding,
    marginBottom: AppValues.padding / 2,
    
  },
  buttonBack: {
    width: 30,
    height: 30,
  },
  inputBloc: {
    marginBottom: AppValues.padding,
  },
  versionBloc: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  versionText: {
    textAlign: 'center',
  },
  pinContainer: {
    width: '100%',
    marginBottom: AppValues.padding,
  },
  pinCellStyle: {
    flex: 1,
    borderColor: hexToRgba(AppColors.primary, 0.5),
    borderWidth: 1,
    borderRadius: pixel(5),
  },
  pinCellFocusedStyle: {
    borderColor: AppColors.accent,
  },
  pinTextStyle: {
    ...AppFonts.medium,
    fontSize: pixel(28),
    color: AppColors.primary,
  },
  resetNoteBloc: {
    alignItems: 'center',
    marginTop: AppValues.padding * 1.5,
  },
  resetNoteText: {
    textAlign: 'center',
    fontStyle: 'italic',
  },
  forgotPassword: {
    justifyContent: 'center', 
    alignSelf: 'center',
    color: AppColors.black,
    marginTop: 15
  },
  center: {
    justifyContent: 'center', 
    alignSelf: 'center'
  },
  description:{
    color: AppColors.grey,
    marginTop: 0,
    marginBottom:pixel(21),
    fontSize: pixel(17),
    textAlign: 'center'
  }

});

export default Styles;
