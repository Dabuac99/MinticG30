import { Router } from "express";
import respuestasHttp from "../utils/respuestasHttp.js"
import usuarioServicio from "../services/usuarioServicio.js";
import { UsuarioCrearReqModel, UsuarioDatosResModel } from "../models/UsuarioModel.js"
import { MilitanteDatosResModel } from "../models/MilitanteModel.js";

const router=Router()
//Crear usuario
router.post("/", (req, res)=>{
    
    usuarioServicio.crearUsuario(new UsuarioCrearReqModel(req.body))
    .then( (usuario)=>{
        respuestasHttp.exito(req, res, new UsuarioDatosResModel(usuario), 201)
    })
    .catch( err=>{
        respuestasHttp.error(req, res, err, "Error al crear el usuario", 400)
    })
})

//traer usuario
router.get("/", (req, res)=>{

    const username = "jperez"
    
    usuarioServicio.leerUsuario(username)
    .then(usuario=>{
        respuestasHttp.exito(req, res, new UsuarioDatosResModel(usuario), 201)
    })
    .catch( err=>{
        respuestasHttp.error(req, res, err, "Error al leer el usuario", 400)
    })    
})

//leer misMilitantes
router.get("/mismilitantes", (req, res)=>{

    const username = "jperez"

    usuarioServicio.leerMisDatos(username)
    
    .then(array=>{
        
        let losDatos = []

        array.forEach(militante => {
            losDatos.push(new MilitanteDatosResModel(militante))
        });

        respuestasHttp.exito(req, res, losDatos, 200)
    })
    .catch(err=>{
        respuestasHttp.error(req, res, err, "Error al leer mis datos", 400)
    })
})


export default router