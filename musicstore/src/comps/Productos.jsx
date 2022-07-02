import React,{Fragment, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ProdCards from './ProdCards';
import Shopcar from './ShopCar';




const Productos = () => {

    //Variables
    const [prodsBD,setProdsBD]=useState([]);
    const [cart,setCart]=useState([]);
    const {cat}=useParams();
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
    const categ=cat;

    //Metodos
    const getProds=async()=>{
    
        return fetch('http://localhost:5500/bd/listarProdsCat/'+categ).then(response => response.json());
  
    }

    
    getProds().then((data)=>{setProdsBD(data)});

    
    const store = JSON.parse(localStorage.getItem('shopStandby'))
    console.log(store)


   //Style
    const styleDivBody={
      color: "black",
      backgroundColor: "black",
      padding: "10  px",
      fontFamily: "Arial"
      

    };
    const styleCar={
        backgroundColor: "black",
    }


    return (
        <div style={{backgroundcolor:"black"}}>
            <div style={{background:"opacity"}} class='position-fixed top-1 end-0'>
                <Shopcar cart={cart} setCart={setCart}/>
            </div>
            <div class="container-fluid">
            {prodsBD.length>0 ?(<div style={styleDivBody} class="row row-cols-3">
                
                {prodsBD.map((producto)=>(

                    
                    (<ProdCards cod={producto.codigoProducto} imagen={producto.foto} nombre={producto.nombre} precio={producto.precio} cart={cart} setCart={setCart} productos={prodsBD}/>)
                
                        
                ))}
            </div>):(<div class="text-center" style={styleDivBody}>
                <h1 style={{color:"white"}}>-----------------------------------------------------------------------------------</h1>
                <h1 style={{color:"white"}}>Lamentamos la noticia pero.....</h1>
                <h1 style={{color:"white"}}>No hay Productos, Pronto Ampliaremos el Stock</h1>
                <h1 style={{color:"white"}}>-----------------------------------------------------------------------------------</h1>
                </div>)}
            </div>
        </div>

        
    );


};

export default Productos;