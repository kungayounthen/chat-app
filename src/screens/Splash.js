import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      loginCheck();
    }, 2000);
    const loginCheck = async () => {
      const name = await AsyncStorage.getItem('NAME');
      const email = await AsyncStorage.getItem('EMAIL');
      if (name && email) {
        navigation.navigate("Main");
      }
      else {
        navigation.navigate('Signup');
      }
    }
  }, [])
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>{'Firebase Chat\nApp'}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "purple",
  },
  logo: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
  }
});
export default Splash