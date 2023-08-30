import { Text, View, StyleSheet } from "react-native"
import { Ionicons } from '@expo/vector-icons';

export function SettingsScreen(){
    return(
        <View style={estilos.container}>
            <Ionicons name="settings" size={120} color="grey" />
            <Text style={estilos.text}>Esta app esta en proceso de desarrollo y de crecimiento, si encuentar alguna falla o deficis por favor hacerlo saber al siguiente contacto</Text>
            <Text style={estilos.text}>desingkuro@gmail.com</Text>
        </View>
    )
}
const estilos=StyleSheet.create({
    container:{
        alignItems:'center',justifyContent:'center',flex:1,
        gap:5,
        opacity:0.7
    },
    text:{
        color:'grey',
        textAlign:'center'
    }
})