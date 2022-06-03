import axios, { Axios } from 'axios';
import React, { useEffect as UseEffect, useState as UseState } from 'react';
import { useParams as UseParams } from 'react-router-dom';
import { WebpayPlus } from 'transbank-sdk';
import { Options, IntegrationApiKeys, Environment, IntegrationCommerceCodes } from 'transbank-sdk';


const trans = () => {

    

//Variables Pagina 
    const montoVenta=UseParams()

    const buyOrder="1";
    const sessionId="40156";
    const amount=montoVenta;
    const returnUrl="http://localhost:3000/Productos/"
    //const data=([buyOrder,sessionId,amount,returnUrl])


    //Webpay

    const [dataTrx,setDataTrx]=UseState("");

const getTrx=async()=>{

      return fetch('http://localhost:5500/webpay/').then(response => response.json());

}

getTrx().then((data)=>{setDataTrx(data)})



//console.log(dataTrx.token)





//Styles
    const styleInput={
        width:"500px"
    }
    const styleLabel={
        font:"Courier New",
    }

    return (
        <div class="container">
            <h3>Datos para Compra</h3>
            <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Correo Electronico</label>
                    <input type="email" class="form-control col-xs-3" id="email" placeholder="name@example.com" style={styleInput}/>
                    
                </div>
            <form action={dataTrx.url} method="POST">
                <p style={styleLabel}>Monto Productos: ${montoVenta}</p>
                <input type="hidden" name="token_ws" value={dataTrx.token}/>
                <input class='btn btn-success' type="submit" value="Pagar"/>
            </form>
        </div>
    );
};

export default trans;