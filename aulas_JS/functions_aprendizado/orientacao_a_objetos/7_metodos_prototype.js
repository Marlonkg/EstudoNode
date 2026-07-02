// aqui farei o mesmo codigo só que organizado da (maneira certa).
//aqui vai ficar só dados.
function Pessoa(nome, idade, rg){
    this.nome = nome
    this.idade = idade
    this.rg = rg
}

//basicamente vc tira as funções ou "metodos" de dentro do construtor.
Pessoa.prototype.somar = function (a,b) {
    return a + b
}
Pessoa.prototype.reclamar = function () {
    console.log('ain, uso das IAs vai acabar com a carreira de programador...')
}
Pessoa.prototype.perguntaIdiota = function (){
    console.log('1 + 1 é 2 ou 3')
    console.log(this.somar(1, 1))
}



let pessoa1 = new Pessoa('Rodrigo', 21, true)
console.log(pessoa1)
pessoa1.reclamar()
pessoa1.perguntaIdiota()
