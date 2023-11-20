import { View, Text } from "react-native"; // Asegúrate de importar Text desde "react-native"
import { StyleDetalleCuenta } from "../Styles/DetalleCuentaStyle";
import {useContext} from 'react'
import { detalles } from "../Api/detalleCuentas";
import { contexto } from "../Context/Context";

export function DetalleCuentaModal() {

    const {indiceCuenta} = useContext(contexto);

    const cuentaActual = detalles[indiceCuenta];

    return (
        <View style={StyleDetalleCuenta.Modal}>
        <View style={StyleDetalleCuenta.container}>
            <Text>Código: {cuentaActual.codigo}</Text>
            <Text>Descripción: {cuentaActual.descripcion}</Text>

            {/* Puedes renderizar la información específica para débito y crédito */}
            <Text>Debito: {cuentaActual.debito.length > 0 ? cuentaActual.debito.join(", ") : "N/A"}</Text>
            <Text>Crédito: {cuentaActual.credito.length > 0 ? cuentaActual.credito.join(", ") : "N/A"}</Text>
        </View>
        </View>
    );s
}

