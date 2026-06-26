// a manipulação de dados funciona como se fosse um objeto comum, mas sem a possibilidade de metodos internos no objeto.
let pessoa = {
    "nome" : "Marlon",
    "idade" : 23,
    "profissao": "programador",
    "hobbies": ["Gameplay", "Anime", "Calistenia"]
}

console.log(pessoa)


// e da pra manipular como objeto tbm criando variaveis internas.
let {nome: pNome, idade: pIdade} = pessoa

console.log(pessoa.nome)
console.log(pessoa.idade)

console.log(pNome)
console.log(pIdade)
