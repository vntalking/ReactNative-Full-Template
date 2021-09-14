import {StyleSheet, Platform} from 'react-native';
import pixel from '../../lib/pixel';
import AppValues from '../../config/values';
import AppFonts from '../../config/fonts';

const Styles = StyleSheet.create({
  container: {
    height: 60, //pixel(60),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: pixel(0),
    paddingRight: AppValues.padding,
    elevation: 0,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  hasElevation: {
    elevation: 5
  },
  noElevation: {
    elevation: 0
  },

  defaultNavButton: {
    width: pixel(35),
  },
  titleBlock: {
    ...Platform.select({
      ios: {
        flex:1,
        alignItems: 'center',
        paddingLeft: 0,
        paddingRight: 0,
      },
      android: {
        flex:1,
        alignItems: 'center',
        paddingLeft: 0,
        paddingRight: 0,
      },
    }),
  },
  headerTitle: {
    ...AppFonts.medium,
    fontSize: pixel(25),
    textAlign: 'left',
  },
  navLeft: {
    alignItems: 'flex-start',
    marginStart: 10
  },
  navRight: {
    alignItems: 'flex-end',
  },
});

export default Styles;
