import {React,useEffect,useState} from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas'
import OffcanvasHeader from 'react-bootstrap/OffcanvasHeader'
import OffcanvasBody from 'react-bootstrap/OffcanvasBody'
import OffcanvasTittle from 'react-bootstrap/OffcanvasTitle'
import ProdCards from './ProdCards';
import ProdCarro from './ProdCarro';
import { Link } from 'react-router-dom';
import CloseButton from 'react-bootstrap/CloseButton'



const ShopCar=({cart,setCart})=>{
    
    
    const [show,setShow]=useState(false);
    const handleClose=()=>setShow(false);
    const handleShow=()=>setShow(true);
    const [montoVenta,setMontoVenta]=useState(0);
    

    const formatterPeso = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
        minimumFractionDigits: 0
      });

    useEffect(()=>{setMontoVenta(cart.map(item=>item.precio).reduce((prev, curr) => prev + curr, 0))});

    localStorage.setItem('cart',JSON.stringify(cart.map((prods)=>(prods))));
    
    
    return (
        <>
        <img src='https://cdn-icons-png.flaticon.com/512/641/641813.png' width='70px' onClick={handleShow}/>
        
        <Offcanvas show={show} onHide={handleClose} placement="end" scroll='true' backdrop='true' aria-modal='true' style={{width:"500px"}}>
                <OffcanvasHeader closeButton><OffcanvasTittle>Carro de Compras</OffcanvasTittle></OffcanvasHeader>
                <OffcanvasBody>
                    <div class='row row-col-2'>
                        <ul class='col'>
                            Producto
                        </ul>
                        <ul class='col'>
                            Precio
                        </ul>
                    </div>
                    <div class='row row-col-4'>
                    {cart.length===0 ? (<p>No hay Productos en el carro</p>) :(cart.map((prod,index)=>(<ProdCarro pos={prod.foto} nombre={prod.nombre} precio={prod.precio}/>)))}
                    </div>
                    <div class='row row-col-3'>
                    <ul class='col'>
                            Valor Total
                        </ul>
                        <ul class='col'>
                            {formatterPeso.format(montoVenta)}
                        </ul>
                        <ul class='col'>
                        {montoVenta!="0" ?(<Link class="btn btn-success" to={"/trx/"+montoVenta}>Pagar</Link>):<p></p>}
                        </ul>
                    </div>
                </OffcanvasBody>
        </Offcanvas>
        </>
    );
};

export default ShopCar;