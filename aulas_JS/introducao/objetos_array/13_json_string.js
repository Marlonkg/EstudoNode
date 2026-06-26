// Esse arquivo é sobre tratamento de dados json: como transformar json em string e o inverso tbm.
let pessoa = {
    "nome" : "Marlon",
    "idade" : 23,
    "profissao": "programador",
    "hobbies": ["Gameplay", "Anime", "Calistenia"]
}

//transforma a variavel json em string. A partir dessa variavel não é mais possivel mencionar elementos internos como pessoa.nome ou pessoa.idade
let pessoaTexto = JSON.stringify(pessoa)
console.log(pessoaTexto)

//para transformar uma string formatada corretamente em json novamente:
let pessoaJSON = JSON.parse(pessoaTexto)
console.log(pessoaJSON)

//mais sobre manipulação de json, um campo interno, obj ou elemento conjunto, não sei como mencionar mais ele... Pode se tornar um array interno, que é o caso de hoobies que pode ser puxado como se fosse um array normal
console.log(pessoaJSON.hobbies[1])
// imprime anime, segundo elemento do campo hobbies.