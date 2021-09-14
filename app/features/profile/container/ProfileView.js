import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import AppColors from '../../../config/colors';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import AppButton from '../../../components/AppButton';
import pixel from '../../../lib/pixel';
import * as RootNavigation from '../../../navigation/RootNavigation';


const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      justifyContent: 'center'
  },
  scrollView: {
    marginBottom: 0,
  },
  text: {
      fontSize: pixel(17)
  }
});


/**
 * 
 * @returns Component hiển thị mỗi item như số điện thoại, email...
 */
const Email = (props) => {
    return (
        <View style={{flexDirection: "row", alignContent: "space-between", margin: 20}}>
            <Icon
                    name={'mail-outline'}
                    size={20}
                    style={{textAlign: 'center', marginTop: 7, color: AppColors.success}}
                  />
            <View style={{flex: 1, marginStart: 20}}>
                <Text style={[styles.text, {color: AppColors.black, marginStart: 5, fontWeight: "bold"}]}>Email</Text>
                <Text style={[styles.text, {color: AppColors.grey, marginStart: 5}]}>{props.name || 'Không có địa chỉ email'}</Text>
            </View>
            
        </View>
    );
}

const Phone = (props) => {
    return (
        <View style={{flexDirection: "row", alignContent: "space-between", margin: 20}}>
            <Icon
                    name={'call-outline'}
                    size={20}
                    style={{textAlign: 'center', marginTop: 7, color: AppColors.success}}
                  />
            <View style={{flex: 1, marginStart: 20}}>
                <Text style={[styles.text,{color: AppColors.black, marginStart: 5, fontWeight: "bold"}]}>Số điện thoại</Text>
                <Text style={[styles.text,{color: AppColors.grey, marginStart: 5}]}>{props.name || 'Không có số điện thoại'}</Text>
            </View>
            
        </View>
    );
}
const Department = (props) => {
    return (
        <View style={{flexDirection: "row", alignContent: "space-between", margin: 20}}>
            <Icon
                    name={'home-outline'}
                    size={20}
                    style={{textAlign: 'center', marginTop: 7, color: AppColors.success}}
                  />
            <View style={{flex: 1, marginStart: 20}}>
                <Text style={[styles.text,{color: AppColors.black, marginStart: 5, fontWeight: "bold"}]}>Phòng ban</Text>
                <Text style={[styles.text,{color: AppColors.grey, marginStart: 5}]}>{props.name || 'Không thuộc phòng ban nào'}</Text>
            </View>
            
        </View>
    );
}


const profileView = (props) => {
    let {user = {}} = props.AppReducer;
    if(user == null) {
        user = {}
    }
    const goChangePassword = () => {
        RootNavigation.navigate('changePassword');
    }

    return (
        <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <View style={{marginTop: pixel(20), alignItems: 'center', justifyContent: 'center'}}>
                        <Avatar.Image  size={100} source={{ uri: user.avatar}} />
                        <Text style={{fontSize: pixel(28), fontWeight: 'bold', color: AppColors.black}}>{user.name || 'Không có'}</Text>
                        <Text style={[styles.text, {color: AppColors.grey}]}>{user.account_type || user.username}</Text>
                    </View>
                <Department name={user.department_name}/>
                <Phone name={user.phone}/>
                <Email name={user.email}/>
                <AppButton
                    label={'Đổi mật khẩu'}
                    style={{
                        width: 200,
                        backgroundColor: AppColors.primary,
                        borderWidth: 0,
                        marginTop: pixel(24),
                    }}
                    onPress={goChangePassword}
                    />
                </View>
        </ScrollView>
    );
}

export default profileView;