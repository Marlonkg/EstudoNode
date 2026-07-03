//aqui uma nova forma de definir uma 'constante' como valor padrão da nossa classe
class Pessoa {
    constructor( nome, idade, rg,){
        this.nome = nome
        this.idade = idade
        this.rg = rg
    }
}

//primeiro criamos uma variavel para definir ela como symbol
let pernas = Symbol()

//com uso dos conchetes definimos um symbol, para imprimir no console diretamente de Pessoa ou o pessoa1 é necessario mencionar ele em conchetes tbm...
Pessoa.prototype[pernas] = 2
Pessoa.prototype.nome = "DSC"

let pessoa1 = new Pessoa('Rodrigo', 21, true)
console.log(pessoa1.nome)
console.log(Pessoa.prototype.nome)


console.log(pessoa1[pernas])