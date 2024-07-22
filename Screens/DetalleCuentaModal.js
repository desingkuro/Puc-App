import { View, Text, ScrollView } from "react-native"; // Asegúrate de importar Text desde "react-native"
import { StyleDetalleCuenta } from "../Styles/DetalleCuentaStyle";
import { useContext, useState } from "react";
import { detalles } from "../Api/detalleCuentas";
import { contexto } from "../Context/Context";
import { memo } from "react";
import { Btn } from "../Components/Btn";

function DetalleCuentaModal() {
  const { indiceCuenta } = useContext(contexto);
  const cuentaActual = detalles[indiceCuenta];
  const [movimiento, setMovimiento] = useState(false);

  function renderMovimiento(movimiento) {
    if (!movimiento) {
      return (
        <View style={StyleDetalleCuenta.debito}>
          <Text style={StyleDetalleCuenta.tittleDebito}>Debita:</Text>
          <Text style={StyleDetalleCuenta.textDC}>
            {cuentaActual.debito.length > 0
              ? cuentaActual.debito.join(", ")
              : "N/A"}
          </Text>
        </View>
      );
    } else {
      return (
        <View style={StyleDetalleCuenta.credito}>
          <Text style={StyleDetalleCuenta.tittleCredito}>Crédito: </Text>
          <Text style={StyleDetalleCuenta.textDC}>
            {cuentaActual.credito.length > 0
              ? cuentaActual.credito.join(", ")
              : "N/A"}
          </Text>
        </View>
      );
    }
  }

  function toggleMovimiento(tipoMovimiento){
    if(tipoMovimiento){
      setMovimiento(true);
    }else if(!tipoMovimiento){
      setMovimiento(false);
    }
  }

  function aumentType(){
    const digitos = cuentaActual.codigo.split('');
    if(digitos[0] == 3){
      return 'Haber'
    }
    if(digitos[0]%2 != 0 || digitos[0] == 6){
      return 'Debe'
    }else if(digitos[0]%2 == 0){
      return 'Haber'
    }
  }

  return (
    <View style={StyleDetalleCuenta.modal}>
      <View style={StyleDetalleCuenta.containerCodigo}>
        <Text style={StyleDetalleCuenta.textTittle}>
          Código: {cuentaActual.codigo}
        </Text>
      </View>
      <View style={StyleDetalleCuenta.containerDescripcion}>
        <Text style={StyleDetalleCuenta.tittleDescripcion}>Descripción:</Text>
        <Text style={StyleDetalleCuenta.textDescripcion}>
          {cuentaActual.descripcion}
        </Text>
        <Text style={StyleDetalleCuenta.textAument}>
          Aumenta en el: {aumentType()}
        </Text>
      </View>
      <View style={StyleDetalleCuenta.containerSelector}>
        <Btn text="Debito" callBack={()=>toggleMovimiento(false)}/>
        <Btn text="Credito" callBack={()=>toggleMovimiento(true)}/>
      </View>
      <ScrollView style={StyleDetalleCuenta.containerDC}>
        {renderMovimiento(movimiento)}
      </ScrollView>
    </View>
  );
}
export default memo(DetalleCuentaModal);
