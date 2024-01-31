import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../utils/firebase';

const Signup = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const registerUser = async () => {
    try {
      const docRef = await addDoc(collection(db, 'users'), {
        email: email,
        name: name,
        password: password,
      });
      console.log('Created with:', docRef.id);
    } catch (e) {
      console.log(e);
    }
  }

  const validate = () => {
    let isValid = true;
    if (name === '') {
      isValid = false;
    } if (email === '') {
      isValid = false;
    } if (password === '') {
      isValid = false;
    } if (confirmPassword === '') {
      isValid = false;
    }
    if (confirmPassword !== password) {
      isValid = false;
    }
    return isValid;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='Enter Name' value={name} onChangeText={txt => setName(txt)} />
        <TextInput style={styles.input} placeholder='Enter Email' value={email} onChangeText={txt => setEmail(txt)} />
        <TextInput style={styles.input} placeholder='Enter Password' secureTextEntry value={password} onChangeText={txt => setPassword(txt)} />
        <TextInput style={styles.input} placeholder='Confirm Password' secureTextEntry value={confirmPassword} onChangeText={txt => setConfirmPassword(txt)} />
      </View>
      <TouchableOpacity style={styles.btn} onPress={() => {
        if (validate()) {
          registerUser();
        } else {
          Alert.alert('Validation Failed!');
        }
      }}>
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.orLogin} onPress={() => navigation.navigate('Login')}>Or Login</Text>
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
    marginTop: 50,
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
export default Signup