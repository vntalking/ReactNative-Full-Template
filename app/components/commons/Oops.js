import React, { memo } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import AppColors from '../../config/colors';
import pixel from '../../lib/pixel';

const Oops = (props) => {
    const {message} = props;
    return (
        <View style={styles.card}>
             <Image
                style={{}}
                source={require('../../assets/images/search-icon.png')}
            />
            <Text style={{textAlign:'center', fontSize: pixel(15), color: AppColors.grey}}>{message || `Không có dữ liệu`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card : {
        borderWidth: 0.5,
        margin: pixel(10),
        shadowColor: AppColors.grey,
        shadowOffset: { width: 0, height:0 },
        shadowRadius: 16,
        shadowOpacity: 0.8,
        elevation: 8,
        backgroundColor: AppColors.white,
        padding: 10,
        borderRadius: pixel(9),
        borderColor:AppColors.lightGray,
        ...Platform.select({
          ios: {
            shadowColor: AppColors.grey,
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 0.2,
            elevation: 1,
          },
          android: {},
        }),
    },
})

export default memo(Oops);