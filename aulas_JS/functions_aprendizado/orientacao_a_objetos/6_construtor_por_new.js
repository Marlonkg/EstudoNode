// Importante, funções passadas dentro dessa função construtora valem para dentro do objeto criado mesmo que o parametro não seja registrado, "aparentemente fica na memoria do objeto"
function Pessoa(nome, idade, rg){
    this.nome = nome
    this.idade = idade
    this.rg = rg
    
    //criando varias funcoes para testar a usabilidade
    this.somar = function (a,b) {
        return a + b
    }
    this.reclamar = () =>{
        console.log('ain, uso das IAs vai acabar com a carreira de programador...')
    }
    this.pensamentoIdiota = () =>{
        console.log('1 + 1 é 2 ou 3')
        console.log(this.somar(1, 1))
    }
}

let pessoa1 = new Pessoa('Rodrigo', 21, true)
console.log(pessoa1)
pessoa1.reclamar()
pessoa1.pensamentoIdiota()
