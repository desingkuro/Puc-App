import { useContext } from "react";
import {TouchableOpacity,Text, View, Alert } from "react-native";
import { contexto } from "../Context/Context";
import { ListElementStyle } from "../Styles/ListElementStyle";

export function ListElement({Count, nombre, navigation}){
    const {icons, obtenerDetalles, indiceCuenta, setIndiceCuenta} = useContext(contexto);

    function obtenerClase(){
        let icono = Count.split('');
        return icono[0]
    }

    function openDetalles(){
        const valor = obtenerDetalles(Count);
        if(valor != undefined || valor != null){
            if(valor >= 0){
                setIndiceCuenta(valor);
                navigation();
            }
        }
    }

    return(
        <TouchableOpacity style={ListElementStyle.container} onPress={openDetalles}> 
           <View style={ListElementStyle.textIcon}>{icons[obtenerClase()]}</View>
           <Text style={ListElementStyle.text}>{ Count+' '+nombre}</Text>
        </TouchableOpacity>
    )
}