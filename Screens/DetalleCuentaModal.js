import { View, Text, ScrollView } from "react-native"; // Asegúrate de importar Text desde "react-native"
import { StyleDetalleCuenta } from "../Styles/DetalleCuentaStyle";
import {useContext} from 'react'
import { detalles } from "../Api/detalleCuentas";
import { contexto } from "../Context/Context";
import { memo } from "react";

function DetalleCuentaModal() {

    const {indiceCuenta} = useContext(contexto);
    const cuentaActual = detalles[indiceCuenta];
    
    return (
        <View style={StyleDetalleCuenta.modal}>
            <View style={StyleDetalleCuenta.containerCodigo}>
                <Text style={StyleDetalleCuenta.textTittle}>Código: {cuentaActual.codigo}</Text>
            </View>
            <View style={StyleDetalleCuenta.containerDescripcion}>
                <Text style={StyleDetalleCuenta.tittleDescripcion}>Descripción:</Text>    
                <Text style={StyleDetalleCuenta.textDescripcion}>{cuentaActual.descripcion}</Text>    
            </View>
            <ScrollView style={StyleDetalleCuenta.containerDC}>
                <View style={StyleDetalleCuenta.debito}>
                    <Text style={StyleDetalleCuenta.tittleDebito}>Debito:</Text>
                    <Text style={StyleDetalleCuenta.textDC}>{cuentaActual.debito.length > 0 ? cuentaActual.debito.join(", ") : "N/A"}</Text>
                </View>
                <View style={StyleDetalleCuenta.credito}>
                    <Text style={StyleDetalleCuenta.tittleCredito}>Crédito: </Text>
                    <Text style={StyleDetalleCuenta.textDC}>{cuentaActual.credito.length > 0 ? cuentaActual.credito.join(", ") : "N/A"}</Text>
                </View>
            </ScrollView>
        </View>
    );
}
export default memo(DetalleCuentaModal);

