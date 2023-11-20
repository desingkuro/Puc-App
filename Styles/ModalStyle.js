import { StyleSheet } from "react-native";

export const ModalStyle = StyleSheet.create({
    containerModal:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#ffff',
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
        height:350,
        left:20,
        justifyContent:'flex-start',
    },
    tittleModal:{
        fontSize:35,
        fontWeight:'900',
        margin:10
    },
    descriptionModal:{
        fontSize:19,
        width:'87%'
    }

})