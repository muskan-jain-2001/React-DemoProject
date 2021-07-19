import React from 'react';
import {View,Image} from 'react-native';
import styles from './style.js';
const Header = (props) => {
    return(
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/logo.jpg')}/>
            <Image style={styles.menu} source={require('../../assets/menu.jpg')}/>
        
        </View>
        
        
         );
     };
     export default Header;