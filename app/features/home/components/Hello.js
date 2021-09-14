import React, {memo} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AppColors from '../../../config/colors';
import AppFonts from '../../../config/fonts';
import AppValues from '../../../config/values';
import { Avatar } from 'react-native-paper';
import pixel from '../../../lib/pixel';

const Hello = (props) => {
    const {data} = props;
    
    return (
        <View style={{marginStart: pixel(15), marginEnd: pixel(15),marginTop: pixel(15), marginBottom: pixel(35), flexDirection:'row', justifyContent:'space-between', alignItems: 'center'}}>
            <View style={{flexDirection:'row', alignItems: 'center'}}>
                <Avatar.Image style={{backgroundColor: AppColors.grey}} size={50} source={{ uri: data.avatar}} />
                <View>
                    <Text style={styles.hello}>Xin chào, </Text>
                    <Text style={styles.name}>{data.name}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    hello: {
        flex: 1,
        color: AppColors.white,
        fontSize: pixel(22),
        textAlignVertical: 'center',
        marginLeft: AppValues.padding,
    },
    name:{
        color: AppColors.white,
        fontSize: pixel(28),
        marginLeft: AppValues.padding,
        ...AppFonts.bold
    }
});

export default memo(Hello);
