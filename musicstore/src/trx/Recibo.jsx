import axios from 'axios';
import { post } from 'jquery';
import {React, useState} from 'react';
import { Link,useParams,useNavigate } from 'react-router-dom';


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
    const [carro]=([JSON.parse(localStorage.getItem('cart'))]);
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    const [dataTrx,setDataTrx]=useState("");
    const {resp,setResp}=false;


    const delItems=async(cod)=>{
        axios.put('http://localhost:5500/bd/BorrarProd/'+cod).then(response => response.json());
    }

    

    const getTrx=async()=>{
          return fetch('http://localhost:5500/trxRecibo/'+tokenData).then(response => response.json());
    }
    
    getTrx().then((data)=>{setDataTrx(data)})
    
    //Modifica Stock
    const modStock=()=>{
            carro.map((prods)=>(
                delItems(prods.codigoProducto).then((data)=>setResp(data))
                
            ))
            console.log(resp);
    }


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

    const navigate = useNavigate();
    const validacion=()=>{
        if (dataTrx.response_code<0) {
            return navigate('/trx/'+dataTrx.amount)
          }else{
            return console.log('ok')
          }
    }
    
    validacion();
    

    return (
        <div class="container">
            <div class="row row-cols-1 text-center">
                <h1 class="text-center">Boleta de su Compra</h1>
                <a>Orden de Compra: {dataTrx.buy_order+'  '}</a>
                <a>Monto Total: ${dataTrx.amount+'  '}</a>
                <a>Tipo de Venta: {tipoVenta(dataTrx.payment_type_code)+'  '}</a>
                <a>Fecha de Transacción: {hoy.toLocaleDateString()}</a>
                {dataTrx.installments_number !=0 ? (<a>Cantidad de cuotas: {dataTrx.installments_number+'  '}</a>) :<p/>}
                {dataTrx.installments_amount !=undefined ? (<a>Monto de las cuotas: ${dataTrx.installments_amount+' '}</a>) :<p/>}
            </div>
            <div class="text-center">
                <Link class="btn btn-success" to={"/"} onClick={modStock()}>Volver a Inicio</Link>

            </div>
            
            
        </div>  
    );
};

export default Recibo;