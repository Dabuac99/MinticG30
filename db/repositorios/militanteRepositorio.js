import { conexion } from "../conexionDB.js"

//var array=[]

const coleccion = ()=>{
    return conexion.obtenerDB().collection("militante")
}

const crear = async (militante)=>{
    //array.push(militante)    
    await coleccion().insertOne(militante)
}

//buscar todos
const leer = async ()=>{
    return await coleccion().find().toArray()
}

//buscar por idMilitante
const detalle = async (idMilitante)=>{
    const militante = await coleccion().findOne({idMilitante: idMilitante})

    return militante ? militante : {}
}

//actualizar
const actualizar = async (militanteDetalle)=>{
    await coleccion().replaceOne({idMilitante: militanteDetalle.idMilitante}, militanteDetalle)

}

//eliminar
const eliminar = async (idMilitante)=>{

    await coleccion().deleteOne({idMilitante: idMilitante})

}

//Datos Usuario conectado
const misDatos = async (idUsuario)=>{
   
    const query = {"usuarioEntity.idUsuario": idUsuario}
    const datos = await coleccion().find(query).toArray()

    return datos ? datos : []
}


export default {crear, leer, detalle, actualizar, eliminar, misDatos}