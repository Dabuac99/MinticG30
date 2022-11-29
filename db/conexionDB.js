import { MongoClient } from "mongodb";

//toco cambiar localhost por 0.0.0.0
const url = "mongodb://0.0.0.0:27017"
const cliente = new MongoClient(url)
const nombreBD = "apimilitantes"
let baseDatos

const conexion = {

    clienteMongo: async (callback)=>{

        /* await cliente.db().admin().listDatabases()
        .then(lista=>{
            const nombre = lista.databases.find(db=> db.name == nombreBD)

            if(!nombre){
                callback("No se pudo conectar a la BD o no existe")
            }
        })
        .catch(()=> callback("Error al conectar con el servidor mongo")) */

        await cliente.connect()
        .then(database=>{

            console.log("Conexion a la base de datos realizada con exito")
            baseDatos = database.db(nombreBD)
            return callback()
        })
        .catch(()=> callback("Error al conectar con el servidor mongo"))

    },

    obtenerDB: ()=>{
        return baseDatos
    }
}

export {conexion}

/* const conexion = async ()=>{
    await cliente.connect()
    const db = cliente.db(nombreBD)
    return db
}

conexion()
.then(async(db)=>{

    console.log("Conectado con exito al servidor BD")
    const militanteColeccion = db.collection("militante")
    const array = await militanteColeccion.find().toArray()
    console.log(array)
})
.catch(console.error)
.finally(()=>cliente.close()) */