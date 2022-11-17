import militanteRepositorio from "../db/repositorios/militanteRepositorio.js"

const crearMilitante = (militante)=>{

    return new Promise( (resolver, rechazar)=>{

        if(!militante.nombres || !militante.identificacion || !militante.fechaExpedIdent || !militante.Genero
            || !militante.fechaNacimiento || !militante.lugarNacimiento || !militante.lugarResidencia  
            || !militante.email  || !militante.telefono || !militante.partidoPolitico){
            rechazar("Datos vacios")
        }

        militanteRepositorio.crear(militante)
        resolver(militante)
    })

}

const leerMilitante = ()=>{

    return new Promise( (resolver, rechazar)=>{
        resolver(militanteRepositorio.leer())
    })
}

export default {crearMilitante, leerMilitante}