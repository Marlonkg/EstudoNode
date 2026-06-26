const pessoa = {
    nome: 'Marlon',
    idade: 24,
    profissao: ['Garçom', 'programador', 'filantropo', 'testando']

    }
console.log(pessoa.nome)

// tentei apagar o objeto inteiro e não funciona
// por algum motivo mirabolante, mesmo sendo uma const, o delete apaga um campo sem problemas.
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

//adicionando campos
pessoa.estadoCivil = 'solteiro'
pessoa.peso = '57kg'

console.log(pessoa.estadoCivil)
console.log(pessoa)

//então posso criar um array dentro do objeto
console.log(pessoa.profissao[2])
console.log(pessoa.profissao)
