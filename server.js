import express from "express"
import { rutas } from "./routes/rutas.js"
import partidopoliticoRepositorio from "./db/repositorios/partidopoliticoRepositorio.js"
import { conexion } from "./db/conexionDB.js"

var app=express()

const PORT="3000"
const HOST="localhost"

app.use(express.json())
app.use(express.urlencoded({extended:true}))

rutas(app)

conexion.clienteMongo((err)=>{

    if(err){
        console.log(err)
        process.exit()
    }

    app.listen(PORT, HOST, ()=>{
        console.log(`Escuchando por el http://${HOST}:${PORT}`)
        
        partidopoliticoRepositorio.crear()
        .then( array => console.log(array))
        .catch(err => console.log("No es posible leer los partidos políticos"))
    })
})

