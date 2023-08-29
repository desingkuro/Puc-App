import { useContext, useState } from "react";
import { TextInput, View} from "react-native";
import { SearchStyle } from "../Styles/SearchStyle";
import { contexto } from "../Context/Context";

export function Header({funcion}){
    const {setListFilter} = useContext(contexto)
    const [valor,setValor] = useState('')

    function changeValue(val){
        setValor(val)
        const listaFiltrada = funcion(val);
        setListFilter(listaFiltrada)
    }

    return(
        <View style={SearchStyle.containerSearch}> 
            <TextInput
                placeholder="Buscar Cuenta"
                value={valor}
                onChangeText={(val)=>changeValue(val)}
                style={SearchStyle.inputText}
            />
        </View>
    )
}