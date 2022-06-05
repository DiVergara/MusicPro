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
    
          return fetch('http://localhost:5500/trxRecibo/').then(response => response.json());
    
    }
    
    getTrx().then((data)=>{setDataTrx(data)})
    
    console.log(dataTrx)






    return (
        <div>
            <h3>Aqui tiene su Boleta</h3>
            <a>{dataTrx.status+'/'}</a>
            <a>{dataTrx.amount+'/'}</a>
            <a>{dataTrx.payment_type_code+'/'}</a>
            <a>{dataTrx.transaction_date}</a>
            <Link class="btn btn-success" to={"/"}>Volver a Inicio</Link>
        </div>
    );
};

export default Recibo;