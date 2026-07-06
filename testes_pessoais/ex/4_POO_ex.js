// para desenvolver mais!
class Carro {
    constructor(marca, cor, gasolinaAtual){
        this.marca = marca
        this.cor = cor
        this.gasolinaAtual = gasolinaAtual
    }
    dirigirCarro(){
        this.gasolinaAtual -= 5
    }
    abastecerCarro(){
        this.gasolinaAtual = 100
    }
}

let meuCarro = new Carro('Ford', 'Preto', 55)

console.log(meuCarro)

// diminuindo a gasolina
meuCarro.dirigirCarro()
meuCarro.dirigirCarro()
meuCarro.dirigirCarro()
console.log(meuCarro)

//enchendo o tanque
meuCarro.abastecerCarro()
console.log(meuCarro)

