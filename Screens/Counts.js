import { FlatList, Text, View } from "react-native"
import { ModalStyle } from "../Styles/ModalStyle"
import { memo, useContext, useEffect, useState} from "react"
import { contexto } from "../Context/Context"
import { Pasivos } from "../Api/PasivosApi"
import { Activos } from "../Api/ActivosApi"
import {Gastos} from "../Api/GastosApi"
import {Patrimonios} from "../Api/PatrimoniosApi"
import {Ingresos} from "../Api/IngresosApi"
import {Costos} from "../Api/CostosApi"
import {ListElement} from '../Components/ListElement'

function Counts({navigation}){
    const {selectClas,clases,icons} = useContext(contexto);
    const [elementos,setElementos] = useState([]);

    useEffect(()=>{
        seleccionarElementosDeLaClase();
    })

    function openDetallesCounts(){
        navigation.navigate('Detalles');
    }

    //renderizar la clase seleccionada
    function viewSelect(){
        if(selectClas==null){
            return(
                <Text style={ModalStyle.tittleModal}>Sin clase seleccionada</Text>
            )
        }
        return(
            <>
            <Text style={ModalStyle.tittleModal}>{icons[selectClas]} {selectClas} {clases[selectClas-1].nombre}</Text>
            <Text style={ModalStyle.descriptionModal}>{clases[selectClas-1].Descripcion}</Text>
            </>
        )
    }

    function seleccionarElementosDeLaClase(){
        switch (clases[selectClas-1].codigo){
            case "1":{
                setElementos(Activos);
                break;
            }
            case "2":{
                setElementos(Pasivos);
                break;
            }
            case "3":{
                setElementos(Patrimonios);
                break;
            }
            case "4":{
                setElementos(Ingresos);
                break;
            }
            case "5":{
                setElementos(Gastos);
                break;
            }
            case "6":{
                setElementos(Costos);
                break;
            }
        }
    }

    return(
        <View style={ModalStyle.containerModal}>
                <View style={ModalStyle.ConatainerInformation}>
                   {viewSelect()}
                </View>
                <View style={ModalStyle.containerScrollclasesAsociadas}>
                    <FlatList
                        style={ModalStyle.scrollContainer}
                        keyExtractor={(item)=>(item.Cuenta)}
                        data={elementos}
                        renderItem={({item})=>(
                            <ListElement nombre={item.Descripción} Count={item.Cuenta} navigation={openDetallesCounts}/>
                        )}
                        initialNumToRender={5}
                        windowSize={5}
                    />
                </View>
            </View>
    )
}

export default memo(Counts);