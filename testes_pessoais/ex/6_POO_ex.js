//sistema de poupança automatica, todo deposito irá direto para poupança, vai precisar ser transferido para corrente para ser usado.
class Conta{
    constructor(saldoC, saldoP, jurosP){
        this.saldoC = saldoC
        this.saldoP = saldoP
        // 1,4% ao mês
        this.jurosP = jurosP
    }
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
        //consertar essa porcaria aq
        if(conta == 'corrente'){
            if(quantia > this.saldoC){
                let total = this.saldoP -= quantia
                console.log(`Sua conta corrente não tem saldo o suficiente, sacando da conta poupança...`)
                console.log(`Você sacou ${quantia}, seu saldo atual é ${total}`)
            } else{
                if(quantia > this.saldoP){
                    let total = this.saldoP -= quantia
                    console.log(`Você sacou ${quantia}, seu saldo atual é ${total}`)
                }else {
                    console.log('Sem saldo suficiente na poupança.')
                }
            }
        }
    }
}