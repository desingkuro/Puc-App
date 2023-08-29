import { useContext } from "react";
import {TouchableOpacity,Text } from "react-native";
import { contexto } from "../Context/Context";
import { ListElementStyle } from "../Styles/ListElementStyle";

export function ListElement({Count, icon, nombre}){
    const {icons} = useContext(contexto)
    return(
        <TouchableOpacity style={ListElementStyle.container}> 
           <Text style={ListElementStyle.text}>{icons[icon]}  {Count} {nombre}</Text>
        </TouchableOpacity>
    )
}