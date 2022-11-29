import militanteRepositorio from "../db/repositorios/militanteRepositorio.js"
import usuarioRepositorio from "../db/repositorios/usuarioRepositorio.js"
import partidopoliticoRepositorio from "../db/repositorios/partidopoliticoRepositorio.js"
import crypto from "crypto"
import { MilitanteEntity } from "../models/MilitanteModel.js"

const crearMilitante = (militante, username)=>{

    return new Promise( async (resolver, rechazar)=>{

        if(!militante.nombres || !militante.identificacion || !militante.fechaExpedIdent || !militante.Genero
            || !militante.fechaNacimiento || !militante.lugarNacimiento || !militante.lugarResidencia  
            || !militante.email  || !militante.telefono || !militante.partidoPolitico){
            rechazar("Datos vacios")
        }

        const usuario = await usuarioRepositorio.buscarUsername(username)
        const nombrepartidopol = await partidopoliticoRepositorio.buscarid(militante.partidoPolitico)

        militante.idMilitante = crypto.randomUUID()
        //militante.creado = new Date()
        militante.usuarioEntity = usuario
        militante.nombrepartidopolEntity = nombrepartidopol
        
        await militanteRepositorio.crear(new MilitanteEntity(militante))
        resolver(await militanteRepositorio.detalle(militante.idMilitante))
        
    })

}

const leerMilitante = ()=>{

    return new Promise((resolver, rechazar)=>{  
        
        militanteRepositorio.leer()
        .then(array=>{
            resolver(array)
        })
        .catch(errr=>{
            rechazar("No es posible leer los militantes")
        })
        
    })

}

const detalleMilitante = (idMilitante)=>{

    return new Promise((resolver, rechazar)=>{

        militanteRepositorio.detalle(idMilitante)
        .then(militante=>{
            resolver(militante)
        })
        .catch(err=>{
            rechazar("No es posible leer el militante")
        })
    })
}

const actualizarMilitante = (idMilitante, militante, username)=>{

    return new Promise( async (resolver, rechazar)=>{

        if(!militante.nombres || !militante.fechaExpedIdent || !militante.Genero
            || !militante.fechaNacimiento || !militante.lugarNacimiento || !militante.lugarResidencia  
            || !militante.email  || !militante.telefono || !militante.partidoPolitico){
            rechazar("Datos vacios - Actualizar")
        }

        const detalleMilitante = await militanteRepositorio.detalle(idMilitante)
        const usuario = await usuarioRepositorio.buscarUsername(username)

        if(detalleMilitante.usuarioEntity.idUsuario != usuario.idUsuario){
            rechazar("No tiene permisos para actualizar datos del militante")
        }

        detalleMilitante.nombres = militante.nombres
        detalleMilitante.fechaExpedIdent = militante.fechaExpedIdent
        detalleMilitante.Genero = militante.Genero
        detalleMilitante.fechaNacimiento = militante.fechaNacimiento
        detalleMilitante.lugarNacimiento = militante.lugarNacimiento
        detalleMilitante.lugarResidencia = militante.lugarResidencia
        detalleMilitante.email = militante.email
        detalleMilitante.telefono = militante.telefono
        detalleMilitante.partidoPolitico = militante.partidoPolitico

        await militanteRepositorio.actualizar(detalleMilitante)
        //para confirmar que se actualizó
        resolver(await militanteRepositorio.detalle(detalleMilitante.idMilitante))
        
    })

}

const eliminarMilitante = (idMilitante, username)=>{

    return new Promise( async (resolver, rechazar)=>{       

        const detalleMilitante = await militanteRepositorio.detalle(idMilitante)
        const usuario = await usuarioRepositorio.buscarUsername(username)
        //console.log(usuario) 
        
        if(detalleMilitante.usuarioEntity.idUsuario != usuario.idUsuario){
            rechazar("No tiene permisos para realizar esta acción")
        }

        resolver(await militanteRepositorio.eliminar(detalleMilitante.idMilitante))
        
    })

}

export default {crearMilitante, leerMilitante, detalleMilitante, actualizarMilitante, eliminarMilitante}