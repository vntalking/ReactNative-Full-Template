import React, {memo} from 'react';
import { Text, View, StyleSheet, TouchableOpacity  } from 'react-native';
import AppColors from '../../../config/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import pixel from '../../../lib/pixel';
import { FlatGrid } from 'react-native-super-grid';
import * as RootNavigation from '../../../navigation/RootNavigation';

const QuickAccess = (props) => {
    const {menu} = props;

    const goTo= (screen) => {
        RootNavigation.navigate(screen)
    }

    const renderItem = ({item})=> {
        return (
            <TouchableOpacity onPress={() => goTo(item.screen)} style={[styles.container, {flex: 1, alignItems:'center'}]}>
                <Icon  
                    name={item.icon}  
                    type='ionicon'  
                    size={30}
                    color={AppColors.white}
                />
                <Text style={styles.text}>{item.name}</Text>
                
            </TouchableOpacity >
        
        );
    }

    return (
        <View>
            <Text style={[styles.textHeader, {margin:pixel(10)}]}>{menu.title}</Text>
            <FlatGrid
                itemDimension={pixel(110)}
                data={menu.data}
                fixed
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textHeader: {
        fontWeight:'bold', 
        fontSize: pixel(20), 
        color: AppColors.white,
        marginBottom: pixel(10)
    },
    container: {
        backgroundColor: AppColors.orange,
        borderRadius: pixel(15),
        padding: pixel(10),
    },
    text: {
        color: AppColors.white,
        fontSize: pixel(16),
        fontWeight: 'bold'
    }
});

export default memo(QuickAccess);
