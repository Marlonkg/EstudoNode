// exercicio do retangulo, area e perimetro
class Retangulo{
    constructor(largura, altura){
        this.largura = largura
        this.altura = altura
    }
    calcularArea(){
        if(this.altura < 1 || this.largura < 1){
            return console.log('erro')
        }else{
            return this.largura * this.altura
        }

    }
    calcularPerimetro(){
        if(this.altura < 1 || this.largura < 1){
            return console.log('erro')
        }else{
            return (this.largura + this.altura) * 2
        }
    }
}
let bola = new Retangulo(12, 10)
console.log(bola.calcularArea())
console.log(bola.calcularPerimetro())