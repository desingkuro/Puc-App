import { StyleSheet } from "react-native";

export const ModalStyle = StyleSheet.create({
    containerModal:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#B9B4C7',
    },
    containerMessage:{
        width:340,
        minHeight:320,
        backgroundColor:'white',
        borderRadius:20,
        position:'relative',
        paddingBottom:10
    },
    containerMessageBig:{
        width:340,
        minHeight:430,
        backgroundColor:'white',
        borderRadius:20,
        position:'relative',
        paddingBottom:10
    },
    iconBack:{
        position:'absolute',
        top:10,
        left:10
    },
    ConatainerInformation:{
        width:'100%',
        top:40,
        height:350,
        alignItems:'center',
        justifyContent:'flex-start',
    },
    tittleModal:{
        fontSize:25,
        fontWeight:'900',
        margin:10
    },
    descriptionModal:{
        fontSize:19,
        width:'87%'
    }

})