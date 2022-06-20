import React, { useState } from "react";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import Contacto from "./comps/Contacto";
import Productos from "./comps/Productos";
import Inicio from "./comps/Inicio";
import Trx from "./trx/trans";
import Recipe from "./trx/Recibo";






function App() {
  return (
      <Router>
            <Routes>
                <Route path='/' element={<Inicio/>}></Route>
                <Route path='/Productos' element={<Productos/>}></Route>
                <Route path='/Contacto' element={<Contacto/>}></Route>
                <Route path='/trx/:montoVenta' element={<Trx/>}></Route>
                <Route exac path='/Recibo/' element={<Recipe/>}></Route>
            </Routes>
        </Router>
        
  );
}

export default App;

