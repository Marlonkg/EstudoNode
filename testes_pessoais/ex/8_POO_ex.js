// Sistema de Reservas de Voo
class Voo{
    constructor(codigoVoo, origem, destino, assentosDisponiveis){
        this.codigoVoo = codigoVoo
        this.origem = origem
        this.destino = destino
        this.assentosDisponiveis = assentosDisponiveis
    }
    reservarAssento(){
        if(this.assentosDisponiveis < 1){
            return console.log('sem assentos disponiveis')
        } else{
            return this.assentosDisponiveis -= 1
        }
    }
    consultarAssentosDisponiveis(){
        return console.log(`Temos ${this.assentosDisponiveis} assentos livres no momento, deseja reservar o seu?`)
    }
}

let boing = new Voo(5445, 'SP', 'RJ', 25)
console.log(boing)
boing.reservarAssento()
console.log(boing)
boing.consultarAssentosDisponiveis()
//facil