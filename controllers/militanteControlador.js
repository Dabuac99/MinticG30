import { Router } from "express";
import respuestasHttp from "../utils/respuestasHttp.js"
import militanteServicio from "../services/militanteServicio.js"
import { MilitanteActualizarReqModel, MilitanteCrearReqModel, MilitanteDatosResModel } from "../models/MilitanteModel.js";


const router=Router()
//crear
router.post("/", (req, res)=>{
    
    /* const militante={
        nombres: req.body.nombres,
        identificacion: req.body.identificacion,
        fechaExpedIdent: req.body.fechaExpedIdent,
        Genero: req.body.Genero,
        fechaNacimiento: req.body.fechaNacimiento,
        lugarNacimiento: req.body.lugarNacimiento,
        lugarResidencia: req.body.lugarResidencia,
        email: req.body.email,
        telefono: req.body.telefono,
        partidoPolitico: req.body.partidoPolitico,
    } */

    //console.log(militante)

    const username = "jperez"

    militanteServicio.crearMilitante(new MilitanteCrearReqModel(req.body), username)
    .then(militante=>{
        respuestasHttp.exito(req, res, new MilitanteDatosResModel(militante), 201)
    })
    .catch(err=>{
        respuestasHttp.error(req, res, err, "Error al crear el militante", 400)
    })
})

//leer
router.get("/", (req, res)=>{
    
    militanteServicio.leerMilitante()
    .then(array=>{

        let losDatos = []

        array.forEach(militante => {
            losDatos.push(new MilitanteDatosResModel(militante))
        });

        respuestasHttp.exito(req, res, losDatos, 200)
    })
    .catch(err=>{
        respuestasHttp.error(req, res, err, "Error al leer lista militantes", 500)
    })
})

//leerdetalle
router.get("/:id", (req, res)=>{
    
    militanteServicio.detalleMilitante(req.params.id)
    .then(militante=>{
       
        respuestasHttp.exito(req, res, new MilitanteDatosResModel(militante), 200)
    })
    .catch(err=>{
        respuestasHttp.error(req, res, err, "Error al leer el detalle del militante", 500)
    })
})

//actualizar
router.put("/:id", (req, res)=>{
    
    const username = "jperez"

    militanteServicio.actualizarMilitante(req.params.id, new MilitanteActualizarReqModel(req.body), username)
    .then(militante=>{
       
        respuestasHttp.exito(req, res, new MilitanteDatosResModel(militante), 200)
    })
    .catch(err=>{
        respuestasHttp.error(req, res, err, "Error al actualizar el militante", 400)
    })
})

//eliminar
router.delete("/:id", (req, res)=>{
    
    const username = "jperez"

    militanteServicio.eliminarMilitante(req.params.id, username)
    .then(()=>{
       
        respuestasHttp.exito(req, res, "Militante eliminado exitosamente", 200)
    })
    .catch(err=>{
        respuestasHttp.error(req, res, err, "Error al eliminar el militante", 400)
    })
})


export default router