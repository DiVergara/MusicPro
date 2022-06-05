import express from "express";
import cors from "cors";

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

app.get("/",(req,res)=>{
    res.send("HelloWorld");
})

app.post("/api/clients",(req,res)=>{
    console.log("dummy Endpoint")
    res.send("You have posted something")
})





//------------Metodo GET para TOKEN y URL
    const execFunc=async(monto)=>{
      const tx = new WebpayPlus.Transaction(new Options(IntegrationCommerceCodes.WEBPAY_PLUS, IntegrationApiKeys.WEBPAY, Environment.Integration));

      
      const createResponse = await tx.create(
        "11", 
        "125", 
        Number.parseInt(monto), 
        "http://localhost:3000/Productos/"
          );
          console.log(createResponse)
          const token=createResponse;
        return token;
    }

    
  
app.get("/webpay/:amount",(req,res)=>{
  const monto=req.params.amount;
  console.log(monto.replace(/[\*\+]/g," ")
  .replace(/^\d+(\s+)?/,"") // or add .trim()
  .replace(/\n?/,"")
  .replace(/\s{2,}/g," "))
  execFunc(monto).then((datos)=>res.send(datos)) 
})
//--------------------------

//--------------------Metodo GET para STATUS TRX---------------------


const funcStatus=async(tokenTrx)=>{
  const tx = new WebpayPlus.Transaction(new Options(IntegrationCommerceCodes.WEBPAY_PLUS, IntegrationApiKeys.WEBPAY, Environment.Integration));

  
  const createResponse = await tx.commit('01abf4afbf7aba94d47185015ad618f75b955358f7031bb4a9fbed3959fc0cf1');
      console.log(createResponse)
      const statusTrx=createResponse;
    return statusTrx;
}



app.get("/trxRecibo/",(req,res)=>{
  const tokenTrx=req.params.data;
  funcStatus(tokenTrx).then((datos)=>res.send(datos)) 
})




//--------------------------------------------------------------------

