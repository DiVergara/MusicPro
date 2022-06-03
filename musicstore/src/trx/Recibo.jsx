import React from 'react';
import { Link } from 'react-router-dom';

const Recibo = () => {
    return (
        <div>
            <h3>Aqui tiene su Boleta</h3>
            <Link class="btn btn-success" to={"/"}>Volver a Inicio</Link>
        </div>
    );
};

export default Recibo;