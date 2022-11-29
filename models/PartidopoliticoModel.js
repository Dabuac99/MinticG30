class PartidopoliticoDatosResModel{
    constructor(partidoPolitico){
        //console.log("ingresa a PartidopoliticoDatosResModel")
        this.id = partidoPolitico.id
        this.nombre = partidoPolitico.nombre
        //console.log("id "+this.id + " nombre " +this.nombre)
    }
}

function PartidopoliticoEntity(partidoPolitico){
    this.id = partidoPolitico.id
    this.nombre = partidoPolitico.nombre
}

export {PartidopoliticoDatosResModel, PartidopoliticoEntity}