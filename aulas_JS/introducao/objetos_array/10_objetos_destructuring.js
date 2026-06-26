// criando "atalhos" para dentro de um objeto. (criando variaveis a partir de um objeto)
const pessoa = {
    nome: "Marlon",
    peso: "55kg",
    idade: 23,
    profissao: "multi-função"
}

//aqui definimos como iremos chamar cada item dentro do objeto. OBS; a ordem não importa apesar de ser mais claro de enxergar fazendo na ordem.
const {
    nome: pNome,
    profissao: pProfissão,
    peso: pPeso,
    idade: pIdade
} = pessoa

console.log(pIdade)
console.log(pProfissão)
console.log(pNome)
