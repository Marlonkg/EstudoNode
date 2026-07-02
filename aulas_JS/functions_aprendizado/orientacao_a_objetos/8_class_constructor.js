//vou fazer a mesma classe do exemplo passado para melhor adaptação, a classe fica mais bonita só que é a mesma coisa...
//da pra ultizar funcoes de forma diferente dentro da class
class Pessoa {
    constructor( nome, idade, rg, pernas = 2){
        this.nome = nome
        this.idade = idade
        this.rg = rg
        this.pernas = pernas
    }
    somar (a,b) {
    return a + b
    }
    reclamar () {
    console.log('ain, uso das IAs vai acabar com a carreira de programador...')
    }
    perguntaIdiota () {
    console.log('1 + 1 é 2 ou 3')
    console.log(this.somar(1, 1))
    }
}

let pessoa1 = new Pessoa('Rodrigo', 21, true)
console.log(pessoa1.pernas)
pessoa1.reclamar()
pessoa1.perguntaIdiota()
