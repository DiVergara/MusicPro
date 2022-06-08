import {React, useState} from 'react';
import { Link,useParams } from 'react-router-dom';


const Recibo = () => {

    //----Obtener Token desde Url
    const getUrlParameter = (name) => {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        let results = regex.exec(window.location.search);
     return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };


    const tokenData=getUrlParameter('token_ws');
    //console.log(tokenData);

    const [dataTrx,setDataTrx]=useState("");

    const getTrx=async()=>{
    
          return fetch('http://localhost:5500/trxRecibo/'+tokenData).then(response => response.json());
    
    }
    
    getTrx().then((data)=>{setDataTrx(data)})
    
    console.log(dataTrx)


    const tipoVenta=(codVenta)=>{
        switch (codVenta) {
            case "VD":
                
                return "Venta Débito";
            case "VN":

                return "Venta Normal";
            case "VC":

                return "Venta en cuotas";
            case "SI":

                return "3 cuotas sin interés";
            case "S2":

                return "2 cuotas sin interés";
            case "NC":

                return "Cuotas sin interés";
            case "VP":

                return "Venta Prepago";
            default:
                return "Error en Definicion";
        }
    }
    /*const fechaFormat=()=>{
        const fechaTrx=dataTrx.transaction_date;

        return fechaTrx.substring(0,10);
    }
    const cardDetail=dataTrx.card_detail;
*/
    return (
        <div class="container">
            <div class="row row-cols-1 text-center">
                <h1 class="text-center">Boleta de su Compra</h1>
                <a>Orden de Compra: {dataTrx.buy_order+' / '}</a>
                <a>Detalle de la Tarjeta: XXXX XXXX XXXX {+' / '}</a>
                <a>Monto Total: ${dataTrx.amount+' / '}</a>
                <a>Tipo de Venta: {tipoVenta(dataTrx.payment_type_code)+' / '}</a>
                <a>Fecha de Transacción: {+' / '}</a>
                <a>Código de respuesta: {dataTrx.response_code+' / '}</a>
                <a>Cantidad de cuotas: {dataTrx.installments_number+' / '}</a>
                <a>Monto de las cuotas: {dataTrx.installments_amount+' / '}</a>
            </div>
            <div class="text-center">
                <Link class="btn btn-success" to={"/"}>Volver a Inicio</Link>

            </div>
            
        </div>
    );
};

export default Recibo;