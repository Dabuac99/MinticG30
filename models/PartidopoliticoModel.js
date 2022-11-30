class PartidopoliticoDatosResModel{
     constructor(partidoPolitico){
         this.id = partidoPolitico.id
         this.nombre = partidoPolitico.nombre

     }
 }

/* function PartidopoliticoDatosResModel(partidoPolitico){
    this.id = partidoPolitico.id
    this.nombre = partidoPolitico.nombre

} */

function PartidopoliticoEntity(partidoPolitico){
    this.id = partidoPolitico.id
    this.nombre = partidoPolitico.nombre

}

export {PartidopoliticoDatosResModel, PartidopoliticoEntity}