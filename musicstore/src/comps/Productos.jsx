import React,{Fragment, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ProdCards from './ProdCards';
import Shopcar from './ShopCar';




const Productos = () => {



    const [productos,setProductos]=useState([
        {cod:1,imagen:"https://www.ibanez.com/common/product_artist_file/file/p_region_LB1_VL_00_01_sub_1.jpg",nombre:"Guitarra Ibanez LB01",precio:56000},
        {cod:2,imagen:"https://www.ibanez.com/common/product_artist_file/file/p_region_Q52_LBM_1P_01_sub_1.jpg",nombre:"Guitarra Ibanez Q52",precio:56000},
        {cod:3,imagen:"https://www.ibanez.com/common/product_artist_file/file/p_region_XPTB620_BKF_1P_01_sub_1.jpg",nombre:"Guitarra Ibanez XPTB620",precio:56000},
        {cod:4,imagen:"https://www.ibanez.com/common/product_artist_file/file/p_region_LB1_VL_00_01_sub_1.jpg",nombre:"Guitarra Ibanez LB01-v2",precio:56000},
        {cod:5,imagen:"https://www.ibanez.com/common/product_artist_file/file/p_region_Q52_LBM_1P_01_sub_1.jpg",nombre:"Guitarra Ibanez Q52-v2",precio:56000},
        {cod:6,imagen:"https://www.ibanez.com/common/product_artist_file/file/p_region_XPTB620_BKF_1P_01_sub_1.jpg",nombre:"Guitarra Ibanez XPTB620-v2",precio:56000},
        {cod:7,imagen:"https://www.ibanez.com/common/product_artist_file/file/p_region_LB1_VL_00_01_sub_1.jpg",nombre:"Guitarra Ibanez LB01-v3",precio:56000},
        {cod:8,imagen:"https://www.ibanez.com/common/product_artist_file/file/p_region_Q52_LBM_1P_01_sub_1.jpg",nombre:"Guitarra Ibanez Q52-v3",precio:56000},
        {cod:9,imagen:"https://www.ibanez.com/common/product_artist_file/file/p_region_XPTB620_BKF_1P_01_sub_1.jpg",nombre:"Guitarra Ibanez XPTB620-v3",precio:56000}
    ]);
    
    const [cart,setCart]=useState([])

    const styleDivBody={
        color: "black",
      backgroundColor: "black",
      padding: "20  px",
      fontFamily: "Arial",
      

    };

    const styleCar={
        backgroundColor: "black",
    }


    return (
        <div style={{backgroundcolor:"black"}}>
            <div style={styleCar} class='position-fixed top-1 end-0'>
            <Shopcar cart={cart} setCart={setCart}/>
            </div>
            <div class="container-fluid">
            <div style={styleDivBody} class="row row-cols-3">
                {productos.map((producto=>(
                    <ProdCards cod={producto.cod} imagen={producto.imagen} nombre={producto.nombre} precio={producto.precio} cart={cart} setCart={setCart} productos={productos}/>
                )))}
            </div>
            </div>
        </div>

        
    );



    /*
            <div style={styleDivBody}>
                {productos.map((producto=>(
                    <ProdCards cod={producto.cod} imagen={producto.imagen} nombre={producto.nombre} precio={producto.precio} cart={cart} setCart={setCart} productos={productos}/>
                )))}
            </div>

            <h2>hola</h2>
                {productos.map((item)=>(<Prod prod={item} cart={cart} setCart={setCart} productos={productos} />))}
            */
};

export default Productos;