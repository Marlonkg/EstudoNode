// a porcaria da udemy não aceita essa bagaça mesmo retornando o valor correto
let teste = [0, -1]
let nums = [-1, 46, 17, 64, 2];
let num = [1, 5, 3, 6, 23, 54, 0, 3]

function findMaxNumber(n){
    let numMaior = 0
    for (let i = 0; i < n.length; i++) {
        if (Math.max(n[i]) > numMaior) {
            numMaior = Math.max(n[i])
        }
        
    }
    return numMaior
}

console.log(findMaxNumber(nums))