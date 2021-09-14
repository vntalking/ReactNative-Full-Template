import {StyleSheet} from 'react-native';
import AppColors from '../../config/colors';
import AppValues from '../../config/values';
import {wdp} from '../../lib/responsive';
import AppFonts from '../../config/fonts';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    //flex: 1,
    backgroundColor: AppColors.white,
    //padding: AppValues.padding,
  },
  indicator: {
    marginBottom: wdp(5),
    marginTop: wdp(2),
  },
  separator: {
    height: AppValues.padding / 2,
    width: AppValues.padding / 2,
  },
  listEmpty: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: wdp(5),
  },
  listEmptyText: {
    ...AppFonts.regular,
    color: AppColors.lightGrey,
  },
});

export default Styles;
