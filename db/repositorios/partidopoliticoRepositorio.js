var array = []

const crear = ()=>{

    let nombresPartidospoliticos = ["Alianza Verde","Centro Democrático","Pacto Histórico","Coalición Centro Esperanza"]

    for(let i=0; i<nombresPartidospoliticos.length; i++){

        const partidopolito={
            id: i+1,
            nombre: nombresPartidospoliticos[i]
        }
        array.push(partidopolito)
    }
    console.log(array)
}

const buscarid = (id)=>{

    const partidopolito = array.find(partidopolito=> partidopolito.id == id)

    return partidopolito ? partidopolito : null
}

export default {crear, buscarid}