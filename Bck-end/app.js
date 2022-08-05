import express from "express";
import cors from "cors";
import { createConnection } from 'mysql';
import pkg from 'transbank-sdk';
const { WebpayPlus } = pkg;
const { Options, IntegrationApiKeys, Environment, IntegrationCommerceCodes } = pkg;
//const asyncHandler = require("../utils/async_handler");



const app=express();
const port=5500;

app.use(express.json({limit:"50mb"}))
app.use(cors()) // Use this after the variable declaration


app.listen(port,()=>{
    console.log('Server is Listening at http://localhost:'+port);
})

//BD MySQL

const conexion= createConnection({
  host:'localhost',
  database:'musicpro',
  user:'root',
  password:''
})

conexion.connect(function(error){
  if(error){
      throw error;
  }else{
      console.log('Conexion Exitosa')
  }
})
/*
app.get("/",(req,res)=>{
    res.send("HelloWorld");
})

app.post("/api/clients",(req,res)=>{
    console.log("dummy Endpoint")
    res.send("You have posted something")
})

*/

 

//Transbank
//------------Metodo GET para TOKEN y URL
    const execFunc=async(montoPago,ordenCompra)=>{
      const tx = new WebpayPlus.Transaction(new Options(IntegrationCommerceCodes.WEBPAY_PLUS, IntegrationApiKeys.WEBPAY, Environment.Integration));
      const buy_order=ordenCompra;
      const amount=parseInt(montoPago);
      const createResponse = await tx.create(
        buy_order, 
        "125", 
        amount, 
        "http://localhost:3000/Recibo/"
          );
          console.log(createResponse)
          const token=createResponse;
        return token;
    }

    
  
app.get("/webpay/:amount/:orden",(req,res)=>{
  const monto=req.params.amount;
  const ordenID=req.params.orden;

  execFunc(monto,ordenID).then((datos)=>res.send(datos)) 
})
//--------------------------

//--------------------Metodo GET para STATUS TRX---------------------


const funcStatus=async(tokenTrx)=>{
  const tx = new WebpayPlus.Transaction(new Options(IntegrationCommerceCodes.WEBPAY_PLUS, IntegrationApiKeys.WEBPAY, Environment.Integration));

  
  const createResponse = await tx.commit(tokenTrx);
      console.log(createResponse)
      const statusTrx=createResponse;
    return statusTrx;
}



app.get("/trxRecibo/:token",(req,res)=>{
  const tokenTrx=req.params.token;
  funcStatus(tokenTrx).then((datos)=>res.send(datos)) 
})




//--------------------------------------------------------------------



///----Productos

//Listar por categoria
app.get("/bd/listarProdsCat/:cat",(req,res)=>{
  const categoria=req.params.cat;
  const sql='SELECT * FROM PRODUCTOS WHERE CATEGORIA="'+categoria+'"';
  conexion.query(sql,function(error,results){
    if(error)
      throw error;

    if(results.length>0){
        res.json(results);
    }else{
      res.send('No hay registros');
    }
  })
})

//Listar Todos
app.get("/bd/listarProds/",(req,res)=>{
  const sql='SELECT * FROM PRODUCTOS';
  conexion.query(sql,function(error,results){
    if(error)
      throw error;

    if(results.length>0){
        res.json(results);
    }else{
      res.send('No hay registros');
    }
  })
})




//Actualiza el stock
app.put("/bd/BorrarProd/:id",(req,res)=>{
  const codProd=req.params.id;
  const sql='UPDATE productos SET existencia=(SELECT existencia-1 FROM productos WHERE codigoProducto="'+codProd+'") WHERE codigoProducto="'+codProd+'"';
  conexion.query(sql,function(error,results){
    if(error){
      throw error;
    }else{
      res.send('OK');
    }
    
  })
})

//Almacena Venta
app.post("/bd/generaDetalle/:cant/:monto/:fecha/:codOper",(req,res)=>{
  //const id=req.params.id;
  const cant=req.params.cant;
  const monto=req.params.monto;
  const fecha=req.params.fecha;
  const codOper=req.params.codOper;

  const sql='INSERT INTO detalleventas(cantidad, montoProd, fechaVenta, cod_oper) VALUES ("'+cant+'","'+monto+'","'+fecha+'","'+codOper+'")';
  conexion.query(sql,function(error,results){
    if(error){
      throw error;
    }else{
      res.send('Registro Agregado');
    }
  })
})


/*//Orden de Compra
app.get("/bd/ordenCompra/",(req,res)=>{
  const sql='SELECT MAX(cod_oper)+1 as cod_oper FROM detalleventas';
  conexion.query(sql,function(error,results){
    if(error){
      throw error;
    }else{
      res.send(results);
    }
  })
})*/