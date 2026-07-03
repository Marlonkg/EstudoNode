class Cachorro{
    constructor(raca, cor){
        this.raca = raca 
        this.cor = cor
    }

    get getCor(){
        return this.cor
    }

    set setCor(cor){
        this.cor = cor
    }

}

// um cachorro Sem Cor Definida, mas o parametro ainda está la, entao serve pra trcar a cor de SCD para a real.
let pastor = new Cachorro('Pastor Alemão', 'SCD')

console.log(pastor)

//ele usa a função de forma estranha, tem que definir o valor com =
pastor.setCor = 'Castanho'
//o valor foi alterado
console.log(pastor)

//ainda não recebi um exemplo util da usabilidade disso aqui, afinal, para conseguir esse mesmo resultado era só colocar pastor.cor
console.log(pastor.getCor)
