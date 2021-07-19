import React from 'react';
import {View, Dimensions, FlatList} from 'react-native';
import styles from './style.js';
import items from './items.js'
import BagItem from '../Bagitems/index';
const List = (props) => {
    return(
        <View style={styles.container}>
            <FlatList data={items}
                    renderItem={({item})=><BagItem bag={item}/>}
                    snapToAlignment={'start'}
                    decelerationRate={'fast'}
                    snapToInterval={Dimensions.get('window').height}
                    showsVerticalScrollIndicator={false}
            />
                
            
        </View>
        
    );
};
export default List;