import militanteRepositorio from "../db/repositorios/militanteRepositorio.js"
import usuarioRepositorio from "../db/repositorios/usuarioRepositorio.js"
import partidopoliticoRepositorio from "../db/repositorios/partidopoliticoRepositorio.js"
import crypto from "crypto"

const crearMilitante = (militante, username)=>{

    return new Promise( (resolver, rechazar)=>{

        if(!militante.nombres || !militante.identificacion || !militante.fechaExpedIdent || !militante.Genero
            || !militante.fechaNacimiento || !militante.lugarNacimiento || !militante.lugarResidencia  
            || !militante.email  || !militante.telefono || !militante.partidoPolitico){
            rechazar("Datos vacios")
        }

        const usuario = usuarioRepositorio.buscarUsername(username)
        const nombrepartidopol = partidopoliticoRepositorio.buscarid(militante.partidoPolitico)

        militante.idMilitante = crypto.randomUUID()
        militante.usuarioEntity = usuario
        militante.nombrepartidopolEntity = nombrepartidopol

        militanteRepositorio.crear(militante)
        resolver(militanteRepositorio.detalle(militante.idMilitante))
        
    })

}

const leerMilitante = ()=>{

    return new Promise( (resolver, rechazar)=>{

        resolver(militanteRepositorio.leer())

    })
}

export default {crearMilitante, leerMilitante}