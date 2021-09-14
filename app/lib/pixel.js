import {create, PREDEF_RES} from 'react-native-pixel-perfect';
const perfectSize = create(PREDEF_RES.iphoneX.dp);

export default function (unit) {
  return perfectSize(unit);
}
