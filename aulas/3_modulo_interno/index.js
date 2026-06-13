//Preciso criar uma variavel para definir a importação do modulo, após isso, toda vez que eu fosse chamar a função soma, seria usando meuModulo.soma.
const meuModulo = require('./modulo')

//teste
meuModulo.soma (2, 5)

//Para facilitar a vida, basta transformar o meuModulo.soma em uma variavel com nome simples e a função é puxada só com um nome.
const soma = meuModulo.soma

soma(1, 7)
soma(7, 7)
soma(5, 8)
soma(2, 4)
soma(23, 44)
soma(234, 4534)
soma(34234, 54645)