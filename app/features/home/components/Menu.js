import React, { useState, memo } from 'react';
import { useWindowDimensions, Text, 
    View, 
    StyleSheet, 
    ScrollView , 
    Platform, 
    StatusBar, 
    TouchableOpacity, 
    SectionList
} from 'react-native';
import AppColors from '../../../config/colors';
import AppFonts from '../../../config/fonts';
import AppLang from '../../../config/lang';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import pixel from '../../../lib/pixel';
import {Button } from 'react-native-elements';
import * as RootNavigation from '../../../navigation/RootNavigation';
import AppModal from '../../../components/AppModal';

const Menu = (props) => {
    const {data, toggleOpen, menuUiData} = props;
    const {doLogout} = data;
    let {user = {}} = data.AppReducer;
    if(user == null) {
        user = {}
    }
    const window = useWindowDimensions();

    const [askLogout, setAskLogout] = useState(false);

    const configmLogOut = () => {
        toggleOpen();
        setAskLogout(true);
    };

    const logOut = () => {
        const onlyResetData = false;
        setAskLogout(false);
        doLogout(onlyResetData);
        
    }

    const goTo= (screen) => {
        toggleOpen();
        RootNavigation.navigate(screen)
    }

    const renderMenuItem = ({item}) => {
        return (
            <TouchableOpacity onPress={() => goTo(item.screen)} style={[styles.menuItem, {flexDirection:'row', alignItems: 'center'}]}>
                <Icon  
                    name={item.icon}  
                    type='ionicon'  
                    size={20}
                    color={AppColors.black}
                />
                <Text style={{marginStart: pixel(16), fontSize: pixel(18)}}>{item.name}</Text>
            </TouchableOpacity >
        
        )
    }

    return (
        <View style={[styles.container, {height: window.height}]}>
            <View style={[styles.headerbox]}>
                <View style={{flexDirection:'row'}}>
                    <Avatar.Image style={{backgroundColor: AppColors.grey}} size={50} source={{ uri: user.avatar}} />
                    <View>
                        <Text style={styles.name}>{user.name} </Text>
                        <Text style={styles.description}>{user.department_name}</Text>
                        <Text style={styles.description}>{user.phone}</Text>
                        <View style={{flexDirection:'row', marginTop: 0, marginBottom: 2}}>
                            <Button
                                icon={
                                    <Icon
                                        name="log-out-outline"
                                        size={pixel(22)}
                                        color={AppColors.danger}
                                    />
                                }
                                title=" Đăng xuất"
                                titleStyle={{color: AppColors.danger}}
                                buttonStyle={{marginStart: -8, backgroundColor: AppColors.transparent, marginTop: pixel(0)}}
                                onPress={configmLogOut}
                            />
                        </View>
                        
                    </View>
                </View>
                <View style={{marginEnd: 5}}>
                    <Button
                        icon={
                            <Icon
                                name="chevron-back-outline"
                                size={pixel(22)}
                                color={AppColors.primary}
                            />
                        }
                        type='clear'
                        title=""
                        titleStyle={{color: AppColors.primary}}
                        buttonStyle={{width: 35, height: 40, backgroundColor: AppColors.transparent}}
                        onPress={toggleOpen}
                    />
                </View>
                {/* <Icon onPress={toggleOpen} name='close-circle-outline'  type='evilicon' size={35}  color={AppColors.grey}/> */}
            </View>
            <ScrollView>
                <View style={{marginBottom: pixel(30)}}>
                    <SectionList
                        sections={menuUiData.data}
                        keyExtractor={(item, index) => item + index}
                        renderItem={renderMenuItem}
                        renderSectionHeader={({ section: { title } }) => (
                            <Text style={styles.menuItemHeader}>{title}</Text>
                        )}
                        ListEmptyComponent={() => (
                            <View style={styles.listEmpty}>
                                <Text style={styles.listEmptyText}>
                                    Không có dữ liệu
                                </Text>
                            </View>
                        )}
                    />
                </View>
            </ScrollView>
            <AppModal
                visible={askLogout}
                icon={'warning'}
                showTitle={true}
                title={AppLang.common.logout.title}
                message={AppLang.common.logout.body}
                showConfirmButton
                showCancelButton
                onConfirm={logOut}
                onCancel={() => {
                    setAskLogout(false)
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        ...Platform.select({
            ios: {
                marginTop: StatusBar.currentHeight + pixel(47),
                paddingBottom: pixel(35)
            }
        })
        

    },
    menuItem:{
        margin: pixel(18)
    },
    menuItemHeader: { 
        fontSize: pixel(18),
        backgroundColor: AppColors.grey1,
        color: AppColors.black,
        padding: pixel(10),
        fontWeight: 'bold'
    },
    listEmpty: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    listEmptyText: {
        ...AppFonts.regular,
        color: AppColors.grey,
    },
    headerbox: {
        backgroundColor: AppColors.white,
        height: pixel(140),
        paddingTop: pixel(15),
        paddingStart: pixel(5),
        paddingEnd: pixel(5),
        borderBottomWidth: pixel(0.5),
        borderBottomColor: AppColors.grey,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    animatedBox: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 10
    },
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F04812'
    },
    name: {
        fontWeight:'bold',
        fontSize: pixel(20),
        marginStart: pixel(8)
    },
    description: {
        fontSize: pixel(15),
        color: AppColors.grey,
        marginStart: pixel(8)
    }

});

export default memo(Menu);
