import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './style';
const Styledbutton = (props) => {
    const type=props.type;
    const content=props.content;
    const onPress=props.onPress;
    const backgroundColor=type==='primary'?'black':'#C5C5C5';
    const textColor=type==='primary'?'white':'black';
    return (
    <View style={styles.container}>
        <Pressable style={[styles.button,{backgroundColor:backgroundColor}]} 
                   onPress={() => onPress()}>
        <Text style={[styles.text,{color:textColor}]}>{content}</Text>
        </Pressable>
    </View>
    );
};
export default Styledbutton;
