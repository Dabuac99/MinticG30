import usuarioRepositorio from "../db/repositorios/usuarioRepositorio.js"
import crypto from "crypto"
import bcrypt from "bcrypt"


const crearUsuario = (usuario)=>{

    return new Promise( (resolver, rechazar)=>{

        if(!usuario.nombre || !usuario.email || !usuario.username || !usuario.password){
            rechazar("Datos vacios o incompletos")
        }

        if(usuarioRepositorio.buscarEmail(usuario.email) != null){
            rechazar("este correo ya se encuentra registrado")
        }

        if(usuarioRepositorio.buscarUsername(usuario.username) != null){
            rechazar("este usuario ya se encuentra registrado")
        }

        usuario.idUsuario = crypto.randomUUID()
        usuario.passwordEncriptada = bcrypt.hashSync(usuario.password, 10)

        usuarioRepositorio.crear(usuario)

        resolver(usuarioRepositorio.buscarUsername(usuario.username))
    })
 
}

const leerUsuario = (username)=>{

    return new Promise( (resolver, rechazar)=>{

        const usuario = resolver(usuarioRepositorio.buscarUsername(username))

        if(usuario == null){
            rechazar("No se encuentra el usuario")
        }

        resolver(usuario)
    })
 
}

export default{crearUsuario, leerUsuario}