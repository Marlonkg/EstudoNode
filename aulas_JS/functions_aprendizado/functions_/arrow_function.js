// arrow function são utilizadas geralmente com a criação de uma variavel com seu nome, deixa esse metodo mais enxuto.

let print = () => {
    console.log('Olá Marilene!')
}

print()

let soma = (a, b) =>{
    return a + b
}

console.log(soma(11, 83))


//fazendo funcoes em uma linha: Quando a arrow function possui apenas um paramentro e poucos acões, ela pode ser resumida sem uso de parenteses e return.
let potencia = x => x ** 2

console.log(potencia(9))