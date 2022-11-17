import express from "express"
import { rutas } from "./routes/rutas.js"

var app=express()

const PORT="3000"
const HOST="localhost"

app.use(express.json())
app.use(express.urlencoded({extended:true}))

rutas(app)


app.listen(PORT, HOST, ()=>{
    console.log(`Escuchando por el http://${HOST}:${PORT}`)
})