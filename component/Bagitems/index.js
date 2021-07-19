import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style.js';
import Styledbutton from '../Styledbutton';
const BagItem = (props) => {
    const {name,tagline,image}=props.bag;
    return (
        <View style={styles.bagcontainer}>
        <Image source={image}
                        style={styles.image}>

        </Image>
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{tagline}</Text>
            </View>
            <View style={styles.button}>
            <Styledbutton type="primary"
                content={"place order"}
                onPress={()=>{
                    console.warn('Order Placed Successfully!');
                }}
            />
            <Styledbutton type="secondary"
                content={"Move To Cart"}
                onPress={()=>{
                    console.warn('Item added to cart!');
                }}
            />
            </View>
        </View>
);
};
export default BagItem;
  