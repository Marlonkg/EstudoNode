//basicamente uma função com paramentros infinitos muito util

let num1 = 4
let num2 = 8
let num3 = 0
let num4 = 5
let num5 = 1
let numeros = [1, 5, 7, 8, 4, 2]

function imprimirNumeros(...n){
    for (let i = 0; i < n.length; i++) {
    console.log(n[i])
        
    }
}
imprimirNumeros(num1, num2, num5, numeros, num3)