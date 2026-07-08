// aprimorando carro
class Carro {
    constructor(marca, cor, motor, gasolinaAtual){
        this.marca = marca
        this.cor = cor
        //supondo 3 tipos de motor, economico, convencional ou turbo.
        this.motor = motor
        this.gasolinaAtual = gasolinaAtual
    }
    dirigirCarro(){
        
        //motores
        if (this.motor == "economico"){
            this.gasolinaAtual -= 1
        }if (this.motor == "convencional"){
            this.gasolinaAtual -= 3
        }if (this.motor == "turbo"){
            this.gasolinaAtual -= 7
        }

        //alerta de gasolina baixa
        if(this.gasolinaAtual < 20){
            return console.log("Seu tanque está abaixo de 20%, por favor abasteça!")
        }
    }
    abastecerCarro(quanto){
        //limitando a gasolina pela capacidade maxima
        if((this.gasolinaAtual + quanto) > 100){
             this.gasolinaAtual = 100

        }else {
            this.gasolinaAtual += quanto
        }
    }
}

let meuCarro = new Carro('Ford', 'Preto', "turbo", 30)

console.log(meuCarro)

// diminuindo a gasolina
meuCarro.dirigirCarro()
meuCarro.dirigirCarro()
console.log(meuCarro.gasolinaAtual)
meuCarro.abastecerCarro(95)
console.log(meuCarro)




