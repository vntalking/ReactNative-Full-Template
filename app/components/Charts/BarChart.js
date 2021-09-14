import React, { useState, useEffect, memo } from 'react';
import { Dimensions, Text, View, StyleSheet } from 'react-native';
import pixel from '../../lib/pixel';
import { BarChart } from 'react-native-chart-kit';
import AppColors from '../../config/colors';
import { ActivityIndicator } from 'react-native-paper';

const KBarChart = (props) => {
    const {data, title='', loading} = props;
    const screenWidth = Dimensions.get("window").width;
    const dataDefault = {
        labels: ['-'],
        datasets: [
          {
            data: [0],
          },
        ]
    };
    const [chartData, setChartData] = useState(dataDefault);

    const chartConfig = {
        backgroundColor: '#fff',
        backgroundGradientFrom: '#fff',
        backgroundGradientTo: '#fff',
        decimalPlaces: 0,
        color: () => AppColors.black,
        labelColor: () => `#000000`,
        strokeWidth: 2,
        style: {
          borderRadius: 16
        },
        fillShadowGradient: AppColors.black,
        fillShadowGradientOpacity: 1,
        barPercentage: 1.1,
        valueColor: '#000000',
    };

    useEffect(() => {
        // onResume
        setChartData(data);
    }, [data]);

    

    const renderExplainItem = ({item})=> {
        return (
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Text style={{marginEnd: pixel(5), width: pixel(20), height: pixel(20), backgroundColor: item.color, borderRadius: 50 }}></Text>
                <Text>{item.text}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {loading && (
                 <ActivityIndicator style={styles.loading} size='large' animating={true} color={AppColors.danger} />
            )}
            <BarChart
                data={chartData}
                width={screenWidth - pixel(22)}
                height={250}
                chartConfig={chartConfig}
                verticalLabelRotation={0}
                withHorizontalLabels={true}
                fromZero={true}
                withCustomBarColorFromData={true}
                flatColor={true}
                showValuesOnTopOfBars={true}
                showBarTops={true}
                withInnerLines={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom:pixel(10),
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

export default memo(KBarChart);
