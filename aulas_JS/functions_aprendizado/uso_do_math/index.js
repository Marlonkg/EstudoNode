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
