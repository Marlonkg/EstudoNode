// basicamente podemos declarar um valor default para um argumento na função usando sinal de igualdade

function potencia(base, exp=2){
    return Math.pow(base, exp)
}
// aqui ele pega o 2 como valor padrão
console.log(potencia(6))


console.log(potencia(6, 2))
console.log(potencia(6, 3))

