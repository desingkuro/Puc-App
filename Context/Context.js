import {createContext, useState } from "react";

import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { detalles } from "../Api/detalleCuentas";

export const contexto = createContext();
export function ContextContainer(props){
    
    const clases = [
        {
            'codigo':'1',
            'nombre': 'Activo',
            'Descripcion':'En esta clase se registran todos los recursos y derechos de propiedad de la empresa. Representa los bienes y valores que la empresa posee y que tienen un valor económico. Se subdivide en cuentas que detallan diferentes tipos de activos, como efectivo, cuentas por cobrar, inventarios y activos fijos. Aumenta en el Debe y disminuye en el Haber.'
        },
        {
            'codigo':'2',
            'nombre': 'Pasivo',
            'Descripcion':'Aquí se registran las obligaciones y deudas de la empresa. Incluye las deudas financieras, cuentas por pagar, impuestos por pagar y otros compromisos financieros. Es una fuente de financiamiento para la empresa. Aumenta en el Haber y disminuye en el Debe.'
        },
        {
            'codigo':'3',
            'nombre': 'Patrimonio',
            'Descripcion':'El patrimonio refleja la inversión de los propietarios en la empresa y su acumulación de ganancias a lo largo del tiempo. Incluye el capital social, las utilidades retenidas y otras cuentas relacionadas con la participación de los propietarios en la empresa. Aumenta en el Haber y disminuye en el Debe.'
        },
        {
            'codigo':'4',
            'nombre': 'Ingreso',
            'Descripcion':'En esta clase se registran los ingresos generados por la venta de bienes y servicios. Representa el dinero que entra a la empresa como resultado de su actividad principal. Aumenta en el Haber y disminuye en el Debe.'
        },
        {
            'codigo':'5',
            'nombre': 'Gasto',
            'Descripcion':'Los gastos representan los costos incurridos por la empresa para operar y generar ingresos. Pueden incluir costos de producción, gastos administrativos, gastos de ventas, entre otros. Aumenta en el Debe y disminuye en el Haber.'
        },
        {
            'codigo':'6',
            'nombre': 'Costos',
            'Descripcion':'Esta clase se subdivide en dos: Subclase 61 - Costos de Ventas: Registra los costos directamente relacionados con la producción y venta de bienes. Incluye materias primas, mano de obra directa y costos indirectos de fabricación. Subclase 62 - Gastos Financieros: Registra los gastos relacionados con el financiamiento de la empresa, como intereses de préstamos y gastos bancarios. Aumenta en el Debe y disminuye en el Haber.'
        },
    ]
    const icons = {
        '1':<FontAwesome5 name="coins" size={24} color="#F0B86E" />,
        '2':<FontAwesome name="credit-card-alt" size={24} color="#33BBC5" />,
        '3':<Ionicons name="person-circle-sharp" size={30} color="#445069" />,
        '4':<Foundation name="graph-bar" size={30} color="#4477CE" />,
        '5':<FontAwesome5 name="money-bill-wave" size={24} color="#9F0D7F" />,
        '6':<AntDesign name="copy1" size={28} color="#A084E8" />
    }
    
    const [selectClas,setSelectClas] = useState(null);
    const [modal,setModal] = useState(false);
    const [listFilter,setListFilter] = useState(null);
    const [indiceCuenta, setIndiceCuenta] = useState(null);

    function binarySearch(array, target) {
        let left = 0;
        let right = array.length - 1;
      
        while (left <= right) {
          const mid = Math.floor((left + right) / 2);
      
          if (array[mid].codigo === target) {
            return mid; // Se encontró el elemento, devuelve el índice
          } else if (parseInt(array[mid].codigo) < parseInt(target)) {
            left = mid + 1;
          } else {
            right = mid - 1;
          }
        }
      
        return -1; // No se encontró el elemento
      }

    function obtenerDetalles(value){
        const valor = binarySearch(detalles,value);
        return valor
    }

    return(
        <contexto.Provider value={{clases,icons,selectClas,setSelectClas,
                                    modal,setModal,listFilter,setListFilter,
                                    obtenerDetalles,indiceCuenta, setIndiceCuenta
                                }}>
            {props.children}
        </contexto.Provider>
    )
}