import {StyleSheet} from 'react-native';
import pixel from '../../lib/pixel';
import AppFonts from '../../config/fonts';
import AppColors from '../../config/colors';

const Styles = StyleSheet.create({
  container: {},
  labelWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    ...AppFonts.regular,
    fontSize: pixel(14),
    color: AppColors.primary,
    marginBottom: pixel(10),
  },
  error: {
    ...AppFonts.regular,
    color: '#B21E1E',
    fontSize: pixel(12),
  },
  inputWrapper: {
    borderWidth: 1,
    borderColor: AppColors.lightGrey,
    borderRadius: pixel(5),
    flexDirection: 'row',
    overflow: 'hidden',
  },
  inputWrapperActive: {
    borderColor: AppColors.grey,
  },
  input: {
    ...AppFonts.regular,
    height: pixel(48),
    paddingLeft: pixel(24),
    paddingRight: pixel(24),
    fontSize: pixel(18),
    color: AppColors.black,
    flex: 1,
    backgroundColor: AppColors.white,
  },
  eyePassword: {
    height: pixel(48),
    width: pixel(48),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Styles;
