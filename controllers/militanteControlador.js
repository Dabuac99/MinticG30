import { Router } from "express";
import respuestasHttp from "../utils/respuestasHttp.js"
import militanteServicio from "../services/militanteServicio.js"

const router=Router()

router.post("/", (req, res)=>{
    
    const militante={
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
    }

    //console.log(militante)

    militanteServicio.crearMilitante(militante)
    .then((militante)=>{
        respuestasHttp.exito(req, res, militante, 201)
    })
    .catch(err=>{
        respuestasHttp.error(req, res, err, "Error al crear el militante", 400)
    })
})


router.get("/", (req, res)=>{
    
    militanteServicio.leerMilitante()
    .then(array=>{
        respuestasHttp.exito(req, res, array, 201)
    })
    .catch(err=>{
        respuestasHttp.error(req, res, err, "Error al leer lista militantes", 500)
    })
})
   

export default router