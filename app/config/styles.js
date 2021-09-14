import AppColors from './colors';
import AppFonts from './fonts';
import pixel from '../lib/pixel';

const AppStyles = {
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  flex: {
    flex: 1,
  },
  pageTitle: {
    ...AppFonts.bold,
    fontSize: pixel(22),
    color: AppColors.primary,
  },
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
  errorBloc: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: pixel(5),
  },
  error: {
    ...AppFonts.regular,
    color: '#B21E1E',
    fontSize: pixel(12),
  },
  bottomTab: {
    height: pixel(40),
    backgroundColor: AppColors.white,
  },
};

export default AppStyles;
