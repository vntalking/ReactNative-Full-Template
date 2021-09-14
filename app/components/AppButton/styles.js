import {StyleSheet} from 'react-native';
import AppColors from '../../config/colors';
import AppFonts from '../../config/fonts';
import pixel from '../../lib/pixel';

export default StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: pixel(23),
    borderWidth: 1,
    height: pixel(46),
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    ...AppFonts.regular,
    fontSize: pixel(18),
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginLeft: pixel(5),
  },
  iconLeft: {
    marginLeft: 0,
    marginRight: pixel(5),
  },
  containerHome: {
    backgroundColor: AppColors.primary,
  },
  buttonHome: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
