import express from "express"
import { rutas } from "./routes/rutas.js"
import partidopoliticoRepositorio from "./db/repositorios/partidopoliticoRepositorio.js"
import { conexion } from "./db/conexionDB.js"
import { variables } from "./utils/variables.js"

var app=express()

const PORT=variables.EXPRESS_PORT
const HOST=variables.EXPRESS_HOST

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

