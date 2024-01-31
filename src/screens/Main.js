import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import Users from '../tabs/Users';
import Setting from '../tabs/Setting';

const Main = () => {
    const [selectedIcon,setSelectedIcon]=useState(0);
    return (
        <View style={styles.container}>
        {selectedIcon===0?<Users/>:<Setting/>}
            <View style={styles.bottomTab}>
                <TouchableOpacity style={styles.tab} onPress={()=>setSelectedIcon(0)}>
                    <FontAwesome5 name="users" size={25}  color={selectedIcon==0?'white':'gray'} />
                </TouchableOpacity> 
                <TouchableOpacity style={styles.tab} onPress={()=>setSelectedIcon(1)}>
                    <Fontisto name="player-settings" size={25}  color={selectedIcon==1?'white':'gray'}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    bottomTab: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 70,
        backgroundColor: 'purple',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    tab: {      
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }

})

export default Main;
