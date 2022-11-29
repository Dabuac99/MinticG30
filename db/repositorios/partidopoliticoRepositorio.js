import {conexion} from "../conexionDB.js"

const coleccion = ()=>{

    return conexion.obtenerDB().collection("partpolitico")
}
//var array = []

const crear = async ()=>{

    await coleccion().deleteMany({})

    let nombresPartidospoliticos = ["Alianza Verde","Centro Democrático","Pacto Histórico","Coalición Centro Esperanza"]

    for(let i=0; i<nombresPartidospoliticos.length; i++){

        const partidopolito={
            id: `${i+1}`,
            nombre: nombresPartidospoliticos[i]
        }
        //array.push(partidopolito)
        await coleccion().insertOne(partidopolito)
    }
    //console.log(array)
    return await coleccion().find().toArray()
}

const buscarid = async (id)=>{

    const partidopolito = await coleccion().findOne({id: id})

    return partidopolito ? partidopolito : null
}

export default {crear, buscarid}