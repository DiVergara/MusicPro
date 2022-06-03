import React from 'react';
import { CloseButton } from 'react-bootstrap';
import './ProdCarro.css'
const prodCarro = (props) => {




    const {nombre,precio}=props;





    return (
        <div>
            <ul className='row rows-col-2' list-style={'none'}>
                <li class='col'>
                    {nombre}
                </li>
                <li class='col'>
                    ${precio}
                </li>
            </ul>
        </div>
    );
};

export default prodCarro;