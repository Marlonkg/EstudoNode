class Mamifero{
    constructor(patas){
        this.patas = patas
    }
    respirar(){
        console.log('...')
    }
}

let coiote = new Mamifero(4)
console.log(coiote.patas)


//com extends só precisamos inserir o paramentro com super ao invez da forma original, assim a nova classe puxa o metodo da antiga.
class Cachorro extends Mamifero{
    constructor(patas, raca){
        super(patas, patas)
        this.raca = raca
    }

    latir(){
        console.log('Au Au')
    }
}

let pug = new Cachorro(4, 'pug')
console.log(pug.patas)
pug.latir()

//funções da classe mae tambem funcionam na filha
pug.respirar()