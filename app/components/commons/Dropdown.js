import React, {memo, useEffect, useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import AppBottomModal from '../../components/AppBottomModal';
import Icon from 'react-native-vector-icons/Ionicons';
import AppColors from '../../config/colors';
import pixel from '../../lib/pixel';

const Dropdown = props => {
    const {data, title, onItemSelected, isMonthType = false} = props;
    const [dropdownData, setDropdownData] = useState([]);
    const [value, setValue] = useState();

    useEffect(() => {
        if(data != null && data.length > 0) {
            if (isMonthType) {
                const currentMonth = new Date().getMonth() + 1
                const index = data.findIndex(month => month.value == currentMonth)
                setValue(data[index]);
                if (onItemSelected) {
                    onItemSelected(data[index]);
                }
            } else {
                setValue(data[0]);
                if (onItemSelected) {
                    onItemSelected(data[0]);
                }
            }
        }
        setDropdownData(data || []);
    },[data])


    // Declare dropdown member state
    let bottomModal;

    const onSelected = dataLv => {
        if (dataLv.length === 0) {
            return;
        }
        setValue(dataLv[0]);
        if (onItemSelected) {
            onItemSelected(dataLv[0]);
        }
    }

    const onShowDropdown = () => bottomModal.showModal();

    return (
        <View>
            <Text style={[styles.dropdownTitle, {color: AppColors.black,marginLeft: pixel(2)}]}>{title}</Text>
            <TouchableOpacity style={styles.input} onPress={onShowDropdown} >
                <View style={[{flexDirection:'row',justifyContent: 'space-between', alignItems: 'center'}]}>
                    <Text numberOfLines={1} style={{flex:1, fontSize: pixel(17)}}>{value? value.label : '---'}</Text>
                    <Icon
                        name="caret-down-outline"
                        size={15}
                        color={AppColors.black}
                    />
                </View>                     
            </TouchableOpacity>
            <AppBottomModal
                ref={ref => (bottomModal = ref)}
                items={dropdownData}
                renderItemText={item => (item ? item.label : '')}
                onSelected={onSelected}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        margin: pixel(2),
        borderWidth: 0.5,
        paddingTop: pixel(9),
        paddingStart: 5,
        paddingEnd: 5,
        borderRadius:5,
        height:pixel(40),
    },
    dropdownTitle: {
        marginBottom: 5,
        marginTop: 8,
        fontSize: pixel(17)
    }
})

export default memo(Dropdown);
