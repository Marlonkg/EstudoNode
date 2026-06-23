//somador de numeros pares de array
const numerosArray = [2,4,6,8,10,11,13,15]

function sumEvenNumbers(n){
    let total = 0
    for (let i = 0; i < n.length; i++) {
        if(n[i] % 2 == 0){
            total += n[i]
        }
    }
    return total
}

console.log(sumEvenNumbers(numerosArray))