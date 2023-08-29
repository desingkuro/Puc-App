import { Text, View } from "react-native"
import { ModalStyle } from "../Styles/ModalStyle"
import { useContext} from "react"
import { contexto } from "../Context/Context"

export function Counts(){
    const {selectClas,clases,icons} = useContext(contexto);

    function viewSelect(){
        if(selectClas!=null){
            return(
                <>
                <Text style={ModalStyle.tittleModal}>{icons[selectClas]} {selectClas} {clases[selectClas-1].nombre}</Text>
                <Text style={ModalStyle.descriptionModal}>{clases[selectClas-1].Descripcion}</Text>
                </>
            )
        }
        return(
            <Text style={ModalStyle.tittleModal}>Sin clase seleccionada</Text>
        )
    }
    return(
        <View style={ModalStyle.containerModal}>
                <View style={selectClas == 6 ?ModalStyle.containerMessageBig :ModalStyle.containerMessage}>
                    <View style={ModalStyle.ConatainerInformation}>
                        {viewSelect()}
                    </View>
                </View>
            </View>
    )
}