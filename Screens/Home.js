import { FlatList, ScrollView, Text, View } from "react-native"
import { HomeStyle } from "../Styles/HomeStyles"
import { Header } from "../Components/Header"
import { CardClass } from "../Components/CardClass"
import { useContext } from "react"
import { contexto } from "../Context/Context"
import { ListElement } from "../Components/ListElement"
import {Counts} from '../Api/Counts'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { DetalleCuentaModal } from "./DetalleCuentaModal"

export function Home({navigation}){
    const {clases,listFilter} = useContext(contexto)
    function renderClass(){
        return clases.map((e,index)=>{
            const clase = e.codigo+' '+e.nombre;
            return <CardClass key={index} clase={clase} icon={e.codigo} navigation={openScreenDetalles}/>
        })
    }

    function openScreenDetalles(){
        navigation.navigate('Counts');
    }
    function openDetallesCounts(){
        navigation.navigate('Detalles');
    }

    function renderListCounts(value) {
        const lowerCaseValue = value.toLowerCase(); // Convertir el valor a minúsculas para una comparación sin distinción de mayúsculas
    
        if(value!=='' || value!==' '){
            return Counts.reduce((filteredCounts, cuenta) => {
                const descripcionMatch = cuenta.Descripción.toLowerCase().includes(lowerCaseValue);
                const cuentaMatch = cuenta.Cuenta.toLowerCase().includes(lowerCaseValue);
        
                if (descripcionMatch || cuentaMatch) {
                    filteredCounts.push(cuenta);
                }
        
                return filteredCounts;
            }, []);
        }
    }
    
    function renderElements(){
        if(!listFilter){
            return <View style={{alignItems:'center'}}>
                <MaterialCommunityIcons name="crosshairs-question" size={94} color="grey" />
                <Text>Busca una cuenta</Text>
            </View> 
        }else if(listFilter.length === 0){
            return <View style={{alignItems:'center',gap:10}}>
                <Fontisto name="question" size={94} color="grey"/>
                <Text>Cuenta no encontrada</Text>
            </View> 
        }
        else {
            return(
                <FlatList
                    style={HomeStyle.scrollContainer}
                    keyExtractor={(item)=>(item.Cuenta)}
                    data={listFilter}
                    renderItem={({item})=>(
                        <ListElement nombre={item.Descripción} Count={item.Cuenta} icon={item.Descripción} navigation={openDetallesCounts}/>
                    )}
                    initialNumToRender={15}
                    windowSize={5}
                />
            )
        }
    }
    return(
        <View style={HomeStyle.containerView}>
            <Header funcion={renderListCounts}/>
            <View style={HomeStyle.scrollContainer}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {renderClass()}
                </ScrollView>
            </View>
            <View style={HomeStyle.ContainerListCount}>
                {renderElements()}
            </View>     
        </View>
    )
}