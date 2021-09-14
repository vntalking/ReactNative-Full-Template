
import React, {memo, useEffect, useState} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-paper';
import pixel from '../../lib/pixel';
import AppColors from '../../config/colors';
import moment from 'moment';
import 'moment/locale/vi'  // without this line it didn't work
moment.locale('vi')

const CalendarIcon = props => {
    const {time, enable=true} = props;
    const {month="September", day='Saturday', date="20"} = props;
    const [timeObject, setTimeObject] = useState({});
    useEffect(() => {
        // onResume
        getTimeObject();
    }, []);

    const getTimeObject = ()=> {
        setTimeObject({
            day: moment(time, "DD/MM/YYYY").format('dddd'),
            month: moment(time, "DD/MM/YYYY").format('MMMM'),
            date: moment(time, "DD/MM/YYYY").date(),
        })
    }

    const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

    return (
        <Card style={styles.card}>
            <View style={[styles.card_title,{backgroundColor: enable ? AppColors.orange : AppColors.deepGrey}]}>
                <Text style={{color:AppColors.white,fontWeight:'bold',fontSize: pixel(15)}}>{capitalizeFirstLetter(timeObject.month || '-')}</Text>
            </View>
            <Card.Content style={styles.card_body}>
                <Text style={styles.date}>{timeObject.date || '-'}</Text>
                <Text style={[styles.day, {color: enable ? AppColors.orange : AppColors.deepGrey}]}>{capitalizeFirstLetter(timeObject.day || '-')}</Text>
            </Card.Content>
        </Card>
    )
}

const styles = StyleSheet.create({
    card : {
        width: pixel(110),
        height: pixel(110),
        borderWidth: 0.5,
        borderRadius:pixel(10),
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 1.22,
        elevation: 3
    },
    card_title : {
        borderTopLeftRadius:pixel(10),
        borderTopRightRadius:pixel(10),
        alignItems: 'center',
        padding:pixel(8),
        textAlign: 'center',
    },
    text: {
        marginVertical: pixel(2),
        fontSize: pixel(17)
    
    },
    card_body:{
        marginTop: pixel(0),
    },
    date: {
        textAlign: 'center',
        fontSize: pixel(30),
        fontWeight: 'bold'
    },
    day: {
        textAlign: 'center',
        fontSize: pixel(16),
        fontWeight: 'bold',
        marginBottom: pixel(-10)
    }
})

export default memo(CalendarIcon);