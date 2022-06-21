import React, { useState } from 'react';



const ProdCards = (props) => {


    const {cod,imagen,nombre,precio,cart,setCart,productos}=props;

    //funcion agregar a cart
    const addProd=(id)=>{
        const prod=productos.filter((producto)=> producto.codigoProducto===id);
        setCart([...cart,...prod])
    }


    return (
        <div class="col">
        <div className='card text-center border-dark mb-4' style={{width:"18rem"}}>
            <img src={imagen} className='card-img-top img-thumbnail' alt='...'></img>
            <div className='card-body'>
                <h5 className='card-title'>{nombre}</h5>
                <p className='card-text'>${precio} clp</p>
                <button class="btn btn-success" onClick={()=>addProd(cod)}>Agregar</button>
            </div>
        </div>
        </div>
    );
};

export default ProdCards;