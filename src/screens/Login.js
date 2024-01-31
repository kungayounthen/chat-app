import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../utils/firebase';
import Loader from '../components/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [visible,setVisible]=useState(false);
    const getData = async () => {
        try {
            setVisible(true)
            const querySnapshot = await getDocs(collection(db, "users"));
            let userFound = false;
            setVisible(false);
            querySnapshot.forEach((doc) => {
                const userData = doc.data();
                if (userData.email === email) {
                    console.log('logged in',userData);
                    userFound = true;
                    goToNext(userData.email,userData.name)
                }
            });
            if (!userFound) {
                Alert.alert('user Not found');
            }
        } catch (e) {
            setVisible(false);
            console.log(e);
        }
    }

    const goToNext=async(name,email)=>{
    await AsyncStorage.setItem('NAME',name);
    await AsyncStorage.setItem('EMAIL',email);
    navigation.navigate('Main');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder='Enter Email' value={email} onChangeText={txt => setEmail(txt)} />
                <TextInput style={styles.input} placeholder='Enter Password' secureTextEntry value={password} onChangeText={txt => setPassword(txt)} />
            </View>
            <TouchableOpacity style={styles.btn} onPress={getData}>
                <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.orLogin} onPress={() => navigation.goBack()}>Or Sign Up</Text>
            <Loader visible={visible}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    inputContainer: {
        gap: 8,
    },
    input: {
        paddingLeft: 20,
        height: 50,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
        borderWidth: .5,
    },
    title: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        marginTop: 100,
        marginBottom: 50,
        fontWeight: '600',
    },
    btn: {
        width: '90%',
        height: 50,
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple',
        marginTop: 50,
    },
    btnText: {
        color: 'white',
        fontSize: 20,
    },
    orLogin: {
        textDecorationLine: "underline",
        textAlign: 'center',
        fontSize: 20,
        marginTop: 30,
        fontWeight: '600',
        color: 'black',
    }
});
export default Login