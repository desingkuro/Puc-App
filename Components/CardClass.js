import {Text, TouchableOpacity} from "react-native";
import { CardClasStyle } from "../Styles/CardClasStyle";
import { useContext} from "react";
import { contexto } from "../Context/Context";


export function CardClass({clase,icon, navigation}){
    const {icons,setSelectClas,setModal} = useContext(contexto);

    function openScreenAndSelection(){
        setSelectClas(icon);
        navigation();
    }
    return(
        <TouchableOpacity style={CardClasStyle.container} onPress={openScreenAndSelection}> 
           <Text style={CardClasStyle.text}>{icons[icon]}  {clase}</Text>
        </TouchableOpacity>
    )
}