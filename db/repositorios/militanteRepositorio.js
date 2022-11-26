var array=[]

const crear = (militante)=>{
    array.push(militante)
}

//buscar todos
const leer = ()=>{
    return array
}

//buscar por id
const detalle = (idMilitante)=>{
    const militante = array.find(militante=> militante.idMilitante == idMilitante)

    return militante ? militante : {}
}

//actualizar
const actualizar = (militanteDetalle)=>{
    const index = array.findIndex(militante=> militante.idMilitante == militanteDetalle.idMilitante)

    if(index != -1){
        array[index] = militanteDetalle
        return array[index]
    }else{
        return {}
    }
}

//eliminar
const eliminar = (idMilitante)=>{
    const index = array.findIndex(militante=> militante.idMilitante == idMilitante)

    if(index != -1){
        
        array.splice(index, 1)
    }

}

//Datos Usuario conectado
const misDatos = (idUsuario)=>{

    const datos = array.filter(militante=> militante.usuarioEntity.idUsuario == idUsuario)

    return datos ? datos : {}
}


export default {crear, leer, detalle, actualizar, eliminar, misDatos}