let num = [2, 3, 1, 10, 60]
//pega o maior numero 
let maior = Math.max(2, 3, 1, 10, 60)
//pega o menor numero
let menor = Math.min(2, 3, 1, 10, 60)

console.log(num) // tentei usar, mas volta um NaN, provavelmente pq ele entrega um objeto, tipo um 'json'
console.log(`O menor numero da lista é ${menor} e o maior é ${maior}.`)

let arredondar = Math.round(3.4) //arredonda para onde a maior parte pender
console.log(arredondar)
let arredondarParaCima = Math.ceil(5.2)// sempre pra cima
console.log(arredondarParaCima)

// pow é para o resultado de um numero elevado a potencias com dois paramentro sendo o segundo a pontencia devida
console.log('o resultado de 5² é ' + Math.pow(5, 2))
console.log('o resultado de 3² é ' + Math.pow(3, 2))
console.log('o resultado de 18² é ' + Math.pow(18, 2))


// criando variavel antes, mesmo resultado
let n1 = Math.pow(5, 2)
console.log(`5² = ${n1}`)

// posso usar a função dentro da interpolação e mencionar variaveis dentro dela.
let n2 = 3
console.log(`${n2}² = ${Math.pow(n2, 2)}`)