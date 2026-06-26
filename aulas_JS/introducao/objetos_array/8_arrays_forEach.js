// metodo do js para passar por cada elemento dentro do array

let numeros = [1, 5, 3, 6, 23, 54, 0, 3]
let total = 0


let nomes = ['jonas', 'maria', 'rodrigo', 'josé']

// impressão de todos os elementos
nomes.forEach(nome =>{
    console.log('O nome é: '+ nome)
})

//soma todos os elementos, mas não entendi como imprime só a soma final dentro da função. Como o total é uma variavel, consigo somar oq acontece dentro, dar o return de total e passar o console pelo lado de fora
numeros.forEach(num =>{
    total += num
    return total
})
console.log(total)