import {Bootcamp} from './classes/bootcamp.class';

let curso_bootcamp=new Bootcamp('Angular','Everis');

curso_bootcamp.agregarEstudiante('cristian')
curso_bootcamp.agregarEstudiante('paul')
curso_bootcamp.agregarEstudiante('paolo')

curso_bootcamp.presentarClase();
document.body.innerHTML = "<h1>Esta es la clase de" + curso_bootcamp.nombre + ", de la empresa: " + curso_bootcamp.empresa 
+ ", con los siguientes alumnos: " + curso_bootcamp.estudiantes
"</h1>"

