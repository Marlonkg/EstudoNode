//Usando instanceof para saber se uma classe é instancia de outra, assim localizando a classe mãe.

class Mamifero{
    constructor(patas){
        this.patas = patas
    }
    respirar(){
        console.log('...')
    }
}


class Cachorro extends Mamifero{
    constructor(patas, raca){
        super(patas, patas)
        this.raca = raca
    }

    latir(){
        console.log('Au Au')
    }
}

//Primeiro a filha depois a mãe
console.log(new Cachorro instanceof Mamifero) //true
