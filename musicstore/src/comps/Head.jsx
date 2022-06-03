import React, { useState,menu,menuitem,useEffect } from 'react';
import { Sidebar, SidebarItem } from "react-responsive-sidebar";
import './Head.css'
import Shopcar from './ShopCar'






const Head = () => {

    const [dropdown,setDropdown]=useState(false);
    const abrirCerrarDrop=()=>{
        setDropdown(!dropdown);
    }

    return (
        <div>
        <div className='menu'>
            <nav className="navbar sticky-top navbar-light bg-light justify-content-between" fixed="top" >
            <a className="navbar-brand">
                <a href="/" class="Home">MusicPro</a>
            </a>
            <div class="row row-cols-5">
                <ul>
                    <li class="dropdown">
                        <a href="/Productos/" class="navig">Cuerdas</a>
                        <div class="dropdown-content">
                            <a href="/Productos/Guitarras">Guitarras</a>
                            <a href="/Productos/Bajos">Bajos</a>
                            <a href="/Productos/Pianos">Pianos</a>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li class="dropdown">
                        <a href="/Productos/Percusion" class="navig">Percusion</a>
                        <div class="dropdown-content">
                            <a href="/Productos/Bateria Acustica">Bateria Acustica</a>
                            <a href="/Productos/Bateria Electronica">Bateria Electronica</a>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li class="dropdown">
                        <a href="/Productos/Amplificacion" class="navig">Amplificacion</a>
                        <div class="dropdown-content">
                            <a href="/Productos/Cabezales">Cabezales</a>
                            <a href="/Productos/Cajas">Cajas</a>
                        </div>
                    </li>
                </ul>
                <ul class='col-sm'>
                    <li class='navig'>
                        <a class="navig" href="/Productos/Accesorios" ele>Accesorios</a>
                    </li>
                </ul>
            </div>
            <div>
                
            <div>
        </div>
            </div>
        </nav>
        
        </div>
        </div>
    );




    
};


export default Head;

