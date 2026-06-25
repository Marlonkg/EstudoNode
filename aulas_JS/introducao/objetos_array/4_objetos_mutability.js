const pessoa = {
    nome: 'Marlon'
}

//basicamente qualquer alteração em uma das duas variaveis será valida para ambas
let pessoa2 = pessoa

let pessoa3 = {
    nome: 'Marlon'
}
console.log(pessoa)
console.log(pessoa == pessoa2)

//mesmo tendo os mesmos campos internos, os dois são diferentes por algum motivo
console.log(pessoa3 == pessoa)

//por algum motivo isso altera os dois mesmo se o primeiro for uma const...
pessoa2.nome = 'maria'

console.log(pessoa == pessoa2)
console.log(pessoa2)
console.log(pessoa)