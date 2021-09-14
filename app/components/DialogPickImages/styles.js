import {StyleSheet} from 'react-native';
import AppColors from '../../config/colors';
import pixel from '../../lib/pixel';
import AppValues from '../../config/values';
import AppFonts from '../../config/fonts';
import {hdp} from '../../lib/responsive';

const Styles = StyleSheet.create({
  modal: {
    padding: 0,
    margin: 0,
  },
  container: {
    flex: 1,
    // marginTop: hdp(50),
    backgroundColor: AppColors.white,
    
    borderTopLeftRadius: pixel(8), //wdp(2),
    borderTopRightRadius: pixel(8), //wdp(2),
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    maxHeight: hdp(90),
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
    backgroundColor: AppColors.primary,
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
  },
  titleCom: {
    paddingBottom: pixel(10),
  },
  title: {
    textAlign: 'center',
    ...AppFonts.bold,
    fontSize: pixel(17),
    color: AppColors.primary,
  },
  message: {
    textAlign: 'center',
    ...AppFonts.medium,
    fontSize: pixel(18),
    color: AppColors.primary,
  },
});

export default Styles;
