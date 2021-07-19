import { StyleSheet ,Dimensions} from "react-native";
const styles= StyleSheet.create({
    bagcontainer:{
        width: '100%',
        height:Dimensions.get('window').height,
    },
    titles:{
        marginTop:'15%',
        width:'100%',
        alignItems:'center',
    },
    title:{
        fontSize:40,
        fontWeight:'bold',
    },
    subtitle:{
        fontSize:16,
        color:'#5c5e62',
    },
    image:{
        width:'100%',
        height:'55%',
        marginTop:140,
        resizeMode:'cover',
        position:'absolute',
        alignSelf:'center',
        
    },
    button:{
        position:"absolute",
        bottom:20,
        width:"100%",
    },
});
export default styles;