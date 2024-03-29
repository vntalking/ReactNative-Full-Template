import React, {memo, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Modal from "react-native-modal";
import { HStack , Button, Text } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';

const BottomDialog = props => {
  /**
   * Định nghĩa các thuộc tính tùy chỉnh của Dialog
   */
  const {
    isShow = false, 
    message = "xtension! vector icons at askyourcode.com or get their VSCode extension!",
    title= "Thông báo",
    showConfirmButton = true,
    confirmButtonText = 'Đồng ý',
    showCancelButton = false,
    cancelButtonText = 'Hủy',
    icon = 'success',
  } = props;

  /**
   * Định nghĩa các actions của Dialog
   */
  const {
    onConfirm = () => {},
    onCancel = () => {}
  } = props;

  return (
    <Modal 
      isVisible={isShow} 
      useNativeDriver={true}
      style={styles.container}
      >
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>{title || "Thông báo"}</Text>
          <Text style={styles.message}>{message || "Không có nội dung"}</Text>

          <HStack space={5} justifyContent="center">
            { showConfirmButton && (
              <Button onPress={onConfirm} style={styles.button}>{confirmButtonText || "Đồng ý"}</Button>
            )}
            { showCancelButton && (
              <Button onPress={onCancel} style={styles.button} colorScheme="secondary">{cancelButtonText || "Hủy"}</Button>
            )}
          </HStack>
        </View>
      </View>
    </Modal>
  );

}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  content: {
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    width: "100%"
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: 'bold'
  },
  message: {
    fontSize: 18,
    marginBottom: 10,
    color: "#5A5A5A"
  },
  button: {
    borderRadius: 20,
    minWidth: 100,
  }
});

export default memo(BottomDialog);