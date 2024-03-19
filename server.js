const express = require ("express")
require("dotenv").config()
const crudRoutes = require("./router/crudRoute")
const app=express()
const PORT = process.env.PORT || 8000
app.get("/",(req,res)=>{
    res.send("welcome to server")
})
app.use(express.json())
app.use("/v1",crudRoutes)


app.listen(PORT,()=>{
    console.log(`hello this is server running at port: ${PORT}`)
})
