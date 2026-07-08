class Endereço{
    constructor(rua, bairro, cidade, estado){
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
    }

    set novaRua(rua){
        this.rua = rua
    }
    set novoBairro(bairro){
        this.bairro = bairro
    }
    set novaCidade(cidade){
        this.cidade = cidade
    }
    set novoEstado(estado){
        this.estado = estado
    }
}

let maria = new Endereço('Rua castilho gonzales', 'União', 'São Paulo', 'São Paulo')
console.log(maria)

maria.novoBairro = 'Bairro do Lixão'
maria.novaRua = 'Beco sem saida'

console.log(maria)
//não estudei, confesso.