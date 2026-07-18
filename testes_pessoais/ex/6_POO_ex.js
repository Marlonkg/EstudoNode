//sistema de poupança automatica, todo deposito irá direto para poupança, vai precisar ser transferido para corrente para ser usado.
class Conta{
    constructor(saldoC, saldoP, jurosP){
        this.saldoC = saldoC
        this.saldoP = saldoP
        // 1,4% ao mês
        this.jurosP = jurosP
    }

    //deposito direto na poupança
    deposito(quantia){
        if(quantia < 1){
            return console.log("quantia invalida ou inexistente")
        }
        let total = this.saldoP += quantia
        console.log(`Você depositou ${quantia}, seu saldo atual é ${total}`)
    }

    saque(conta = 'poupanca', quantia){
        if(quantia < 1){
            return console.log("quantia invalida ou inexistente")
        }
        if(conta == 'corrente'){
            if(quantia > this.saldoC){
                console.log('sem saldo suficiente na conta corrente, usando a poupança...')
                if(quantia < this.saldoP){
                    let total = this.saldoP -= quantia
                    console.log(`Você sacou ${quantia}, seu saldo atual é ${total}`)
                }else {
                    console.log('Sem saldo suficiente na poupança.')
                }
            }
        }
    }
    simulacaoJ(meses){
        this.jurosP = 0.014
        let lucro = (this.saldoP * this.jurosP) * meses
        console.log(lucro)
        let total = this.saldoP + lucro
        console.log(total)
    }
}