let arr = [3, 6, 7, 9, 12, 76, 0, 12]

let nomes = ['jonas', 'maria', 'rodrigo', 'josé']

let total = 0

for (let i = 0; i < arr.length; i++) {
    console.log('numeros: ' + arr[i])
    total += arr[i]
    
}
console.log('a soma de todos os numeros: ' + total)

for (let i = 0; i < nomes.length; i++) {
    console.log('Usuário: ' + nomes[i])
}