//tratamento de arrays
let numeros = [2, 5, 7, 8]


function mediaArray(n){
    let total = 0
    for (let i = 0; i < n.length; i++) {
        total += n[i]
    }
    return n.length === 0 ? 0 :  total / n.length
}
console.log(mediaArray(numeros))