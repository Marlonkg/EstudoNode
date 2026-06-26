// sendo o contrario do split, ele junta elementos de um array em uma string só...

let texto = 'Tres pratos de trigo para tres tigres tristes'

let palavras = texto.split(' ')

//tambem da pra mencionar direto no console.log, optei por criar uma variavel, o uso vem com o parametro do separador entre os parenteses
let novoTexto = palavras.join('!--!')
console.log(novoTexto)