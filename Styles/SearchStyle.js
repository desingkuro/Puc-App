import { StyleSheet } from "react-native";

export const SearchStyle = StyleSheet.create({
    containerSearch:{
        width:'100%',
        height:60,
        alignItems:'center',
        justifyContent:'center'
    }
    ,inputText:{
        height:'90%',
        backgroundColor:'#ffff',
        width:'98%',
        borderRadius:10,
        padding:5,
        fontSize:18,

        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 4
    }
})