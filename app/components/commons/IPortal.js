import React, { useState, useEffect, memo } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AppColors from '../../config/colors';
import pixel from '../../lib/pixel';
import { ActivityIndicator } from 'react-native-paper';
import {Divider} from 'react-native-elements'

const IPortal = (props) => {
    const {title='',} = props;
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({
        total_post: {},
        top_categories:[]
    });

    useEffect(() => {
        getData();
    },[])

    const getData = () => {
        props.getPortalStatistics(false, {}, response => {
            if(response != null) {
                setData(response);
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
            <Text style={styles.categoryTitle}>Thống kê bài viết:</Text>
            <View style={{padding: pixel(3), flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <Text style={styles.text}>Bài viết mới trong ngày</Text>
                <Text style={{fontWeight:'bold'}}>{data.total_post.day} bài</Text>
            </View>
            <View style={{padding: pixel(3),flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <Text style={styles.text}>Bài viết mới trong tháng</Text>
                <Text style={{fontWeight:'bold'}}>{data.total_post.month} bài</Text>
            </View>
            <View style={{padding: pixel(3), marginBottom: pixel(5), flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <Text style={styles.text}>Bài viết mới trong năm</Text>
                <Text style={{fontWeight:'bold'}}>{data.total_post.year} bài</Text>
            </View>
            <Divider orientation="horizontal" width={1}/>
            <Text style={[styles.categoryTitle, {marginTop: pixel(5)}]}>Danh mục nổi bật:</Text>
            { data.top_categories.map((category, key) => ( 
                    <View key={key} style={{padding: pixel(3), flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                        <Text style={styles.text}>{category.tenChuyenMuc}</Text>
                        <Text style={[styles.text, {fontWeight:'bold'}]}>{category.tongSoLuotView} lượt xem</Text>
                    </View>
                ))
            }

            
        </View>
    )
}

const styles = StyleSheet.create({
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
    categoryTitle: {
        fontWeight:'bold', 
        fontSize: pixel(18),
        marginBottom: pixel(10)
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
    text: {
        fontSize: pixel(16)
    }
});

export default memo(IPortal);