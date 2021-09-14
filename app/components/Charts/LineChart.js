import React, { useState, useEffect, memo } from 'react';
import { Dimensions, Text, View, StyleSheet } from 'react-native';
import pixel from '../../lib/pixel';
import { LineChart } from 'react-native-chart-kit';
import { FlatGrid } from 'react-native-super-grid';
import AppColors from '../../config/colors';
import { ActivityIndicator } from 'react-native-paper';

const KLineChart = (props) => {
    const {data, extraconfig = 100, title='', loading} = props;
    const screenWidth = Dimensions.get("window").width;
    const dataThuNS = {
        labels: [''],
        datasets: [
          {
            data: [0],
          },
        ],
        legends: ['']
    };
    const [chartData, setChartData] = useState(dataThuNS);

    const chartConfig = {
        backgroundColor: '#ffffff',
        backgroundGradientFrom: '#ffffff',
        backgroundGradientTo: '#ffffff',
        decimalPlaces: 0, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: () => `#000000`,
        strokeWidth: 2,
        style: {
          borderRadius: 16
        },
        propsForDots: {
          r: '5',
          strokeWidth: '1',
          stroke: '#ffffff',
        }
    };

    useEffect(() => {
        // onResume
        setChartData(data);
    }, [data]);

    

    const renderExplainItem = ({item})=> {
        return (
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Text style={{marginEnd: pixel(5), width: pixel(20), height: pixel(20), backgroundColor: item.color, borderRadius: 50 }}></Text>
                <Text style={{fontSize: pixel(14), marginEnd: pixel(5)}}>{item.text}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {loading && (
                 <ActivityIndicator style={styles.loading} size='large' animating={true} color={AppColors.danger} />
            )}
            <LineChart
                yAxisSuffix=" Tr"
                data={chartData}
                width={screenWidth - pixel(22)}
                height={220}
                chartConfig={chartConfig}
                bezier
            />
            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <FlatGrid
                    itemDimension={extraconfig.itemDimension}
                    spacing={15}
                    data={chartData.legends || ['']}
                    renderItem={renderExplainItem}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom:pixel(10),
        backgroundColor: AppColors.transparent
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
    }
});

export default memo(KLineChart);
