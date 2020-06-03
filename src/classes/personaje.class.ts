export class Personaje{
    constructor(
        public nombre:string,
        public epoca:string,
        public arma:string,
        public nacimiento:Date
    ){}

    viajar(){
        console.log(`${this.nombre} viajo de su epoca ${this.epoca} a la epoca ${this.nacimiento} con un ${this.arma} `)
    }
}