export class Pelicula{
    
    constructor(
        public nombre:string,
        public director:string,
        public estreno:Date,
        public duracion:number,
        public familiar:boolean
    ){
        
    }

   presentarPelicula(){
        console.log(`${this.nombre} fue dirigida por ${this.director}, tiene una duracion de  ${this.convertirAMinutos()}`)
        console.log(`se estreno en ${this.estreno.getDate()}/${this.estreno.getMonth()+1}/${this.estreno.getFullYear()}`)

        document.body.innerHTML += "<h1>"+`${this.nombre} fue dirigida por ${this.director}, tiene una duracion de  ${this.convertirAMinutos()}, se estreno en ${this.estreno.getDate()}/${this.estreno.getMonth()+1}/${this.estreno.getFullYear()}`;

        if(this.familiar){
            console.log(` y es apta para toda la familia`)
            document.body.innerHTML+="<h1> y es apta para toda la familia.</h1>";
        }
        else{
            console.log(` y es apta solo para mayores`)
            document.body.innerHTML+="<h1>  y es apta solo para mayores.</h1>";
        }
       
    }

    convertirAMinutos():string{ 
        var hours = Math.floor(this.duracion/ 60);  
        var minutes = this.duracion % 60;
        return hours + ":" + minutes;         
    }
}