/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
  Image,
} from 'react-native';
import pixel from '../../../../lib/pixel';
import AppColors from '../../../../config/colors';
import AppFonts from '../../../../config/fonts';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import formatDateTime from '../../../../lib/formatDateTime';
import HorizontalList from '../../../../components/HorizontalList';
import AppValues from '../../../../config/values';

type Props = {
  data: any,
};

export default class ItemExample extends React.PureComponent<Props> {
  _gotoPageDetail = () => {
    const {data, onPress} = this.props;
    if (onPress) {
      onPress(data);
    }
  };
  render() {
    const {data} = this.props;

    let ngayGui = formatDateTime(data.CREATE_DATE);

    return (
      <TouchableWithoutFeedback onPress={this._gotoPageDetail}>
        <View
          elevation={5}
          style={{
            margin: pixel(8),
            marginBottom: pixel(8),
            marginTop: pixel(16),
            backgroundColor: AppColors.white,
            borderRadius: pixel(4),
            borderWidth: pixel(1),
            ...Platform.select({
              ios: {
                shadowColor: '#470000',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.2,
                elevation: 1,
              },
              android: {},
            }),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: color,
              borderTopLeftRadius: pixel(3),
              borderTopRightRadius: pixel(3),
            }}>
            <Text
              style={{
                flex: 1,
                color: AppColors.white,
                alignSelf: 'center',
                fontSize: AppValues.sizeTextSmall,
                margin: pixel(8),
              }}>
              aa
            </Text>

            <View>
              {/* <Icon
                  name={'check'}
                  size={21}
                  color={AppColors.white}
                  style={{alignSelf: 'center'}}
                /> */}
              <Text
                style={{
                  color: AppColors.white,
                  alignSelf: 'center',
                  fontSize: AppValues.sizeTextSmall,
                  margin: pixel(8),
                  ...AppFonts.bold,
                }}>
                aâ
              </Text>
            </View>
          </View>
          <View style={{padding: pixel(8)}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Icon
                  name={'user'}
                  size={16}
                  color={AppColors.primary}
                  style={{minWidth: pixel(25)}}
                />
                <Text
                  style={{
                    fontSize: AppValues.sizeTextSmall,
                    marginLeft: pixel(8),
                    ...AppFonts.regular,
                    alignSelf: 'center',
                  }}>
                  aa
                </Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Icon
                  name={'clock'}
                  size={16}
                  color={AppColors.primary}
                  style={{textAlign: 'center', alignSelf: 'center'}}
                />
                <Text
                  style={{
                    fontSize: AppValues.sizeTextSmall,
                    marginLeft: pixel(5),
                    ...AppFonts.regular,
                    alignSelf: 'center',
                  }}>
                  {ngayGui}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: pixel(8),
              }}>
              <Icon
                name={'briefcase'}
                size={16}
                style={{minWidth: pixel(25)}}
              />
              <Text
                style={{
                  fontSize: AppValues.sizeTextSmall,
                  marginLeft: pixel(8),
                }}>
                C/v:
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: AppValues.sizeTextSmall,
                  marginLeft: pixel(8),
                  flex: 1,
                  textAlign: 'justify',
                  ...AppFonts.bold,
                }}>
                aâ
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: pixel(8),
                alignItems: 'center',
              }}>
              <Icon
                name={'project-diagram'}
                size={16}
                style={{minWidth: pixel(25)}}
              />
              <Text
                style={{
                  fontSize: AppValues.sizeTextSmall,
                  marginLeft: pixel(8),
                }}>
                Dự án:
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: AppValues.sizeTextSmall,
                  marginLeft: pixel(8),
                  flex: 1,
                  textAlign: 'justify',
                  ...AppFonts.bold,
                }}>
                aâ
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: pixel(8),
                alignItems: 'center',
              }}>
              <Icon
                name={'map'}
                size={16}
                style={{
                  minWidth: pixel(25),
                }}
              />
              <TouchableOpacity
                onPress={this._openMap}
                style={{
                  marginLeft: pixel(8),
                  backgroundColor: AppColors.green1,
                  borderRadius: pixel(3),
                  paddingHorizontal: pixel(8),
                  paddingVertical: pixel(2),
                }}>
                <Text style={{fontSize: pixel(14), color: AppColors.white}}>
                  Xem vị trí
                </Text>
              </TouchableOpacity>
            </View>

            <Text
              style={{
                marginTop: pixel(5),
                flex: 1,
                fontSize: pixel(16),
                ...AppFonts.regular,
              }}>
              aa
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
