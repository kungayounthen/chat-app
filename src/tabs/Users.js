import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { collection,getDocs } from 'firebase/firestore'
import { db } from '../utils/firebase'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Users = () => {
    useEffect(()=>{
    getUsers();
    },[])
    const getUsers = async () => {
        const email = await AsyncStorage.getItem('EMAIL');
        const querySnapshot = await getDocs(collection(db, 'users'));
        console.log('Snapshot',querySnapshot.docs)
        querySnapshot.forEach((doc) => {
            const userData = doc.data();
            if (userData.email === email) {
                console.log(userData);
            }
        })
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>an firebase chat app</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    header: {
        width: '100%',
        height: 60,
        backgroundColor: 'white',
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'purple',
        textTransform: 'capitalize',
        fontSize: 20,
        fontWeight: '600',
    }
});
export default Users