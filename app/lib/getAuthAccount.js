import AsyncStorage from '@react-native-community/async-storage';

export default async function () {
  const data = await AsyncStorage.getItem('account');
  try {
    let dataTem = JSON.parse(data);
    if (dataTem.username != null) {
      return dataTem;
    }
    return null;
  } catch (e) {
    return null;
  }
}
