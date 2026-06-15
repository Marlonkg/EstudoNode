const minimist = require('minimist')

// mesmo processo de separar as duas linhas iniciais com a diferença de mencionar o minimist.
const args = minimist(process.argv.slice(2))

//O minimist 'transforma' é um array, objeto ou algo parecido de facil manipulação
const nome = args['nome']
const profissao = args['profissao']

console.log(`O nome dele é ${nome} e sua profissão é ${profissao}`)
