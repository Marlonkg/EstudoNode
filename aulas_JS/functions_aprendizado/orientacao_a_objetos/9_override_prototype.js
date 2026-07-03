// aqui vejo algo que ja vi antes, mas de outra forma, como constante da class pessoa podemos definir por exemplo o pernas como padrão
class Pessoa {
    constructor( nome, idade, rg,){
        this.nome = nome
        this.idade = idade
        this.rg = rg
    }
}

//não entendi a ultilidade disso aqui pra definir algo que ja esta dentro da função construtora... Pernas por exemplo é util...
Pessoa.prototype.pernas = 2
Pessoa.prototype.nome = "DSC"

let pessoa1 = new Pessoa('Rodrigo', 21, true)
console.log(pessoa1.nome)
console.log(Pessoa.prototype.nome)

// o prototype definiu e é usavel essa definição.
console.log(pessoa1.pernas)