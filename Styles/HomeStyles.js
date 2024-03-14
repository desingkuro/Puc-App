import { StyleSheet } from "react-native"

export const HomeStyle=StyleSheet.create({
    containerView:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start',
        padding:5,
        gap:10
    },
    scrollContainer:{
        height:100,
        width:'100%',    
        paddingLeft:10,
        minWidth:380
    },scroll:{
        flex:1,
        paddingTop:12
    },
    ContainerListCount:{
        height:'100%',
        width:'100%',

        alignItems:'center',
        justifyContent:'center',
        paddingBottom:100
    }
})
