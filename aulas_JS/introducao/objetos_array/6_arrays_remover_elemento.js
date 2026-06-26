let nomes = ['jonas', 'maria', 'rodrigo', 'josé']

//   .pop() remove o ultimo elemento do array
let ultimoRemovido = nomes.pop()

console.log(ultimoRemovido)
console.log(nomes)

//    .push(elemento), para adicionar mais um elemento no fonal do array
nomes.push('pedro')
console.log(nomes)

//   .shift() para remover o primeiro elemento do array
let primeiroRemovido = nomes.shift()
console.log(nomes)


//  .unshift(elemento), para adicionar um elemento em primeira posição
nomes.unshift('gabriel')
console.log(nomes)

//Detalhe não explicado na aula, não precisa declarar variavel para remover elementos, é só uma pratica para vizualisar qual elemento foi retirado.

// metodo slice que corta a começo do array ou o meio
let num = [454, 423, 125, 664, 432, 783, 234, 342, 121]

// ele usa o indice como paramentro, aqui o segundo indice serve como parada, ele não é mencionado na resposta do console.
console.log(num.slice(1, 2))

// caso não mencione um segundo indice, o slice corta do primeiro até o fim do array (pega o 4º elemento pra frente)
console.log(num.slice(3))

// usando numeros negativos para cortar apenas o final do array (-2 por exemplo tira os dois ultimos elementos do array)
console.log(num.slice(3, -2))

//caso não use paramentro inicial ele menciona os 2 ultimos com -2
console.log(num.slice(-2))

//conclusão geral, negativos como segundo parametro corta o final em aquele numero de paramentros, o positivo define quais elementos serão mencionados, a partir dali... 
