import usuarioRepositorio from "../db/repositorios/usuarioRepositorio.js"
import militanteRepositorio from "../db/repositorios/militanteRepositorio.js"
import crypto from "crypto"
import bcrypt from "bcrypt"


const crearUsuario = (usuario)=>{

    return new Promise((resolver, rechazar)=>{

        if(!usuario.nombre || !usuario.email || !usuario.username || !usuario.password){
            rechazar("Datos vacios o incompletos")
        }

        usuarioRepositorio.buscarEmail(usuario.email)
        .then(usuario=>{
            if(usuario != null){
                rechazar("este correo ya se encuentra registrado")
            }
        })

        usuarioRepositorio.buscarUsername(usuario.username)
        .then(usuario=>{
            if(usuario != null){
                rechazar("este usuario ya se encuentra registrado")
            }
        })

        usuario.idUsuario = crypto.randomUUID()
        usuario.passwordEncriptada = bcrypt.hashSync(usuario.password, 10)

        usuarioRepositorio.crear(usuario)
        .then( async ()=>{
            resolver(await usuarioRepositorio.buscarUsername(usuario.username))
        })
        .catch(err=>{
            rechazar("No es posible crear el usuario")
        })
        
    })
 
}

const leerUsuario = (username)=>{

    return new Promise((resolver, rechazar)=>{

        usuarioRepositorio.buscarUsername(username)
        .then(usuario=>{

            if(usuario == null){
                rechazar("No se encuentra el usuario")
            }
    
            resolver(usuario)

        })     

    })
 
}

const leerMisDatos = (username)=>{

    return new Promise( (resolver, rechazar)=>{
        
        usuarioRepositorio.buscarUsername(username)

        .then(usuario=>{

            if(usuario == null){
                rechazar("No se encuentra el usuario")
            }
            
            militanteRepositorio.misDatos(usuario.idUsuario)
            .then(array=>{
                resolver(array)
            })
            .catch(err=>{
                rechazar("No es posible obtener mis militantes")
            })

        })

    })
    
}

export default {crearUsuario, leerUsuario, leerMisDatos}