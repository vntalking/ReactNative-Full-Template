import React from 'react'
import { Button, View , Text, StyleSheet, TouchableOpacity, Icon} from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons';
import AppValues from '../../config/values';
import AppColors from '../../config/colors';

const iconButton = (props) => {

    return (
        <TouchableOpacity 
            style={[styles.container, {margin: props.margin || AppValues.padding}, {width: props.size|| 120},{height: props.size|| 120}, {borderColor:  props.backgroundColor || '#fff'}, {backgroundColor: props.backgroundColor}]}
            onPress={props.onPress}
        >
         <IonIcons name={props.icon ||'ios-home-outline'} style={{color: props.isDark ? AppColors.white : AppColors.black}} size={props.iconsize || 50} />
         <Text style={{color: props.isDark ? AppColors.white : AppColors.black}}>{props.name}</Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    center: {
      alignItems: 'center'
    },
    icon:{
       color: AppColors.white
    },
    container: {
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 35
    },
    name:{
        fontSize: 16,
        fontWeight: "400",
        color: AppColors.white,
    }
  })


export default iconButton;