//comando que mostra oq foi mandado após o node arquivo.js
console.log(process.argv)

//como vem 2 caminhos de diretorio, nós cortamos os dois caminhos para deixar apenas oq mandamos depois.
const args = process.argv.slice(2)

//só pra checar oq está sendo imprimido
console.log(args)

//faço a divisão 
const nome = args[0].split('=')[1]

//check
console.log(nome)

const idade = args[1].split('=')[1]

console.log(idade)

//fazendo edição de string com os argumentos enviados.
console.log(`${nome} tem ${idade} anos de idade!`)