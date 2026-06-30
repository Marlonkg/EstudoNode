const pessoa = {
    maos: 2,
}

let pessoaNova = Object.create(pessoa)


// getPrototypeOf serve para ver oq tem por trás do objeto mencionado e não oq tem dentro naquele momento.
console.log(Object.getPrototypeOf(pessoaNova))

// o caminho final é sempre null em um objeto: [Object: null prototype] {}
console.log(Object.getPrototypeOf(pessoa))


// essa comparação se refere a base inicial do prototype que existe em qualquer objeto com a mesma base sendo comparada... praticamente inutil para compreensão...
console.log(Object.getPrototypeOf(pessoa) === Object.prototype)


// dai vem um exemplo bom de comparação. Ele pega o prototype que pessoaNova herdou e compara com pessoa pra ver se contem as mesmas informações... E retorna true, afinal, pessoaNova foi criado a partir de pessoa.
console.log(Object.getPrototypeOf(pessoaNova) === pessoa)


// hasOwnProperty verifica se a função ou caracteristica é própria. Retorna false caso seja herdada
console.log(pessoa.hasOwnProperty('maos'))
// false pq maos é herdado de pessoa
console.log(pessoaNova.hasOwnProperty('maos'))

// como é herdado, posso usar normalmente
console.log(pessoaNova.maos)

