import React, { useState, useEffect, memo } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AppColors from '../../config/colors';
import pixel from '../../lib/pixel';
import { ActivityIndicator } from 'react-native-paper';

const IGate = (props) => {
    const {title='',} = props;
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
        getData();
    },[])

    const getData = () => {
        props.getIGateStatistics(false, {}, response => {
            if(response != null & response.length > 0) {
                setData(response[0]);
            }
           
            setLoading(false);
        })
    }
    const capitalizeFirstLetter = string => {
        if(typeof string !== 'undefined') {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        return "--";
        
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {loading && (
                 <ActivityIndicator style={styles.loading} size='large' animating={true} color={AppColors.danger} />
            )}

            <Text style={styles.textHeader}>{data.title}</Text>

            <Text style={[styles.percentText, {color: data.percent > 99 ? AppColors.success : AppColors.danger}]}>{data.percent}</Text>
            <Text style={{textAlign:'center', fontSize: pixel(19), color: '#135a82'}}>{capitalizeFirstLetter(data.content)}</Text>
            <Text style={{textAlign:'center', marginTop: pixel(10), fontStyle: 'italic', fontSize: pixel(14), color: AppColors.black}}>{data.time_update}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textHeader: {
        fontWeight:'bold', 
        fontSize: pixel(17), 
        color: AppColors.black,
        marginBottom: pixel(5),
        marginTop: pixel(0),
        textAlign:'center'
    },
    container: {
        marginStart:pixel(10),
        marginEnd:pixel(10),
        marginBottom:pixel(20)
    },
    title: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: pixel(18),
        fontWeight: 'bold',
        color: AppColors.primary
    },
    loading:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0.8,
        backgroundColor: AppColors.grey1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999999
    },
    percentText: {
        fontSize: pixel(40), 
        textAlign:'center',
        fontWeight: 'bold'
    }
});

export default memo(IGate);