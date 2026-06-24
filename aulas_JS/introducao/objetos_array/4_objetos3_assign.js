let carro = {
    portas: 2,
    portaMalas: '200L',
    motor: '2.0'
}

let adicionais = {
    tetoSolar: true,
    arCondicionado: true,
}

console.log(carro)

// basicamente carro recebe todas as caracteriscas dentro de adicionais.
Object.assign(carro, adicionais)

console.log(carro)