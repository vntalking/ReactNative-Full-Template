import pixel from '../lib/pixel';

const LAYOUT_SPACE = pixel(20);

const AppValues = {
  padding: LAYOUT_SPACE,
  hitSlop: {
    top: LAYOUT_SPACE,
    bottom: LAYOUT_SPACE,
    left: LAYOUT_SPACE,
    right: LAYOUT_SPACE,
  },
  sizeTextSmall: pixel(15),
  sizeTextNomal: pixel(16),
  sizeTextLager: pixel(18),
};

export default AppValues;
