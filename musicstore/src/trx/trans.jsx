import React, { useEffect as UseEffect, useState as UseState } from 'react';
import { useParams as UseParams } from 'react-router-dom';



const trans = () => {

    

//Variables Pagina 
    const {montoVenta}=UseParams()

    const buyOrder="1";
    const sessionId="40156";
    const amount=montoVenta;
    const returnUrl="http://localhost:3000/Recibo/"
    //const data=([buyOrder,sessionId,amount,returnUrl])


    //Webpay

    const [dataTrx,setDataTrx]=UseState("");

const getTrx=async()=>{

      return fetch('http://localhost:5500/webpay/').then(response => response.json());

}

getTrx().then((data)=>{setDataTrx(data)})



console.log(dataTrx.token)





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
                    <p style={styleLabel}>Monto Productos: ${amount}</p>
                </div>
            <form action={dataTrx.url} method="POST">
                <input type="hidden" name="token_ws" value={dataTrx.token}/>
                <input class='btn btn-success' type="submit" value="Pagar"/>
            </form>
        </div>
    );
};

export default trans;