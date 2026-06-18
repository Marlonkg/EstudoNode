//modulo externo
const minimist = require('minimist')

//modulo interno, nesse metodo de importação da função, preciso usar o (CaminhoDaPasta).NomeDaFunção
const soma = require('./modulo').soma

//corte das duas linhas
const args = minimist(process.argv.slice(2))

//primeiro numero
const a = parseInt(args['a'])

//segundo numero
const b = parseInt(args['b'])

soma(a, b)

//Argumentos sempre são strings como padrão, para que isso seja alterado o parseInt entra no codigo.

