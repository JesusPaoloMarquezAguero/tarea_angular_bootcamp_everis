export class Bootcamp{
    estudiantes:string[];
    constructor(
        public nombre:string,
        public empresa:string
    ){
        this.estudiantes=[];
    }

    agregarEstudiante(estudiante:string){
        this.estudiantes.push(estudiante);
    }

    presentarClase(){
        console.log(`Esta es la clase de ${this.nombre}, de la empresa ${this.empresa}`)
        console.log(`Los alumnos son: ${this.estudiantes}`)
    }
}