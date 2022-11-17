import militanteControlador from "../controllers/militanteControlador.js"
import usuarioControlador from "../controllers/usuarioControlador.js"

const rutas=(app)=>{
    app.use("/militante", militanteControlador)
    app.use("/usuario", usuarioControlador)
}

export {rutas} 