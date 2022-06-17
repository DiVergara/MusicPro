import React from 'react';
import { CloseButton } from 'react-bootstrap';
import './ProdCarro.css'
const prodCarro = (props) => {




    const {nombre,precio}=props;

    

    const quitarProd=()=>{
        
    }


    return (
        <div>
            <ul className='row rows-col-3' list-style={'none'}>
                <li class='col'>
                    {nombre}
                </li>
                <li class='col'>
                    ${precio}
                </li>
                <li class='col'>
                    <CloseButton />
                </li>
            </ul>
        </div>
    );
};

export default prodCarro;