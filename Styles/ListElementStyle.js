import { StyleSheet } from "react-native";

export const ListElementStyle = StyleSheet.create({
    container:{
        height:80,
        width:'100%',
        alignItems:'center',
        marginBottom:2,
        borderBottomWidth:1,
        flexDirection:'row',

    },
    text:{
        fontSize:18,
        fontWeight:'700',
        width:'90%',
        height:60,
        textAlignVertical:'center',
    },
    textIcon:{
        width:40,
        height:40,
        alignItems:'center',
        justifyContent:'center'
    },
})