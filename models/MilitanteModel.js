import {UsuarioDatosResModel, UsuarioEntity} from "./UsuarioModel.js"
import {PartidopoliticoDatosResModel, PartidopoliticoEntity} from "./PartidopoliticoModel.js"

function MilitanteCrearReqModel(militante){
    this.nombres = militante.nombres
    this.identificacion = militante.identificacion
    this.fechaExpedIdent = militante.fechaExpedIdent
    this.Genero = militante.Genero
    this.fechaNacimiento = militante.fechaNacimiento
    this.lugarNacimiento = militante.lugarNacimiento
    this.lugarResidencia = militante.lugarResidencia
    this.email = militante.email
    this.telefono = militante.telefono
    this.partidoPolitico = militante.partidoPolitico
}

function MilitanteDatosResModel(militante){
    this.idMilitante = militante.idMilitante
    this.nombres = militante.nombres
    this.identificacion = militante.identificacion
    this.fechaExpedIdent = militante.fechaExpedIdent
    this.Genero = militante.Genero
    this.fechaNacimiento = militante.fechaNacimiento
    this.lugarNacimiento = militante.lugarNacimiento
    this.lugarResidencia = militante.lugarResidencia
    this.email = militante.email
    this.telefono = militante.telefono
    this.partidoPolitico = militante.partidoPolitico
    this.usuarioEntity = new UsuarioDatosResModel(militante.usuarioEntity)
    this.nombrepartidopolEntity = new PartidopoliticoDatosResModel(militante.nombrepartidopolEntity)
    
}

function MilitanteActualizarReqModel(militante){
    this.nombres = militante.nombres
    this.fechaExpedIdent = militante.fechaExpedIdent
    this.Genero = militante.Genero
    this.fechaNacimiento = militante.fechaNacimiento
    this.lugarNacimiento = militante.lugarNacimiento
    this.lugarResidencia = militante.lugarResidencia
    this.email = militante.email
    this.telefono = militante.telefono
    this.partidoPolitico = militante.partidoPolitico
}

function MilitanteEntity(militante){
    this.idMilitante = militante.idMilitante
    this.nombres = militante.nombres
    this.identificacion = militante.identificacion
    this.fechaExpedIdent = militante.fechaExpedIdent
    this.Genero = militante.Genero
    this.fechaNacimiento = militante.fechaNacimiento
    this.lugarNacimiento = militante.lugarNacimiento
    this.lugarResidencia = militante.lugarResidencia
    this.email = militante.email
    this.telefono = militante.telefono
    this.partidoPolitico = militante.partidoPolitico
    this.usuarioEntity = new UsuarioEntity(militante.usuarioEntity)
    this.nombrepartidopolEntity = new PartidopoliticoEntity(militante.nombrepartidopolEntity)
}

export {MilitanteCrearReqModel, MilitanteDatosResModel, MilitanteActualizarReqModel, MilitanteEntity}