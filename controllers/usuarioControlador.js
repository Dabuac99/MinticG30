import { Router } from "express";
import respuestasHttp from "../utils/respuestasHttp.js"
import usuarioServicio from "../services/usuarioServicio.js";
import { UsuarioCrearReqModel, UsuarioDatosResModel } from "../models/usuarioModel.js"

const router=Router()

router.post("/", (req, res)=>{
    
    usuarioServicio.crearUsuario(new UsuarioCrearReqModel(req.body))
    .then( (usuario)=>{
        respuestasHttp.exito(req, res, new UsuarioDatosResModel(usuario), 201)
    })
    .catch( err=>{
        respuestasHttp.error(req, res, err, "Error al crear el usuario", 400)
    })
})


router.get("/", (req, res)=>{

    const username = "jperez"
    
    usuarioServicio.leerUsuario(username)
    .then( (usuario)=>{
        respuestasHttp.exito(req, res, new UsuarioDatosResModel(usuario), 201)
    })
    .catch( err=>{
        respuestasHttp.error(req, res, err, "Error al leer el usuario", 400)
    })    
})
   

export default router