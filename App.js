import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import List from '../demoproject/component/List';
import Header from './component/Header';

export default function App() {
    return ( 
    <View style = { styles.container } >
    <Header/>
        <List/>
        <StatusBar style = "auto" / >
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
});