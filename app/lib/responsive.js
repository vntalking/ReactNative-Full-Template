import {
  widthPercentageToDP,
  heightPercentageToDP,
  listenOrientationChange,
  removeOrientationListener,
} from 'react-native-responsive-screen';

export function wdp(number) {
  return widthPercentageToDP(number);
}

export function hdp(number) {
  return heightPercentageToDP(number);
}

export function lor(component) {
  return listenOrientationChange(component);
}

export function rol(component) {
  return removeOrientationListener(component);
}
