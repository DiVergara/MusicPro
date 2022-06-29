import React from 'react';
import { CloseButton } from 'react-bootstrap';
import './ProdCarro.css'
const prodCarro = (props) => {




    const {pos,nombre,precio}=props;

    const formatterPeso = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
        minimumFractionDigits: 0
      });

    return (
        <div>
            <ul className='row rows-col-3' list-style={'none'}>
                <li class='col'>
                <img src={pos} style={{width:'80px'}} alt='...'></img>
                </li>
                <li class='col'>
                    {nombre}
                </li>
                <li class='col'>
                    {formatterPeso.format(precio)}
                </li>
            </ul>
        </div>
    );
};

export default prodCarro;