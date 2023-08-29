import { StyleSheet } from "react-native";

export const CardClasStyle = StyleSheet.create({
    container:{
        height:70,
        width:250,
        alignItems:'center',
        justifyContent:'center',

        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 4

        ,backgroundColor:'#ffff',
        borderRadius:20,
        marginRight:10
    },
    text:{
        fontSize:26,
        fontWeight:'700'
    }
})