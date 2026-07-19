//sistema de poupança automatica, todo deposito irá direto para poupança, vai precisar ser transferido para corrente para ser usado.
class Conta{
    constructor(saldoC, saldoP, jurosPorMes){
        this.saldoC = saldoC
        this.saldoP = saldoP
        // 1,4% ao mês
        this.jurosP = (jurosPorMes / 100).toFixed(3)
    }

    //deposito direto na poupança
    deposito(quantia){
        if(quantia < 1){
            return console.log("quantia invalida ou inexistente")
        }
        let total = this.saldoP += quantia
        console.log(`Você depositou R$:${quantia.toFixed(2)}, seu saldo atual é R$:${total.toFixed(2)}`)
    }

    saque(quantia, conta = 'poupanca'){
        if(quantia < 1){
            return console.log("quantia invalida ou inexistente")
        }
        if(conta == 'corrente'){
            if(quantia > this.saldoC){
                console.log('sem saldo suficiente na conta corrente, usando a poupança...')
            } else{
                this.saldoC -= quantia
                console.log(`Você sacou R$:${quantia.toFixed(2)}, seu saldo atual é R$:${this.saldoC.toFixed(2)}.`)
            }
        }
        if(conta == 'poupanca'){
                if(quantia > this.saldoP){
                    console.log('Sem saldo suficiente na poupança.')     
                }else {
                    this.saldoP -= quantia
                    console.log(`Você sacou R$:${quantia.toFixed(2)}, seu saldo atual é R$:${this.saldoP.toFixed(2)}.`)   
                }
        }
    }
    simulacaoJ(meses){
        if(meses < 1){
            return console.log('seu imbecil, não pode simular negativo.')
        }
        let lucro = (this.saldoP * this.jurosP) * meses
        console.log(`com ${meses} mes(es) de rendimento, você lucraria R$:${lucro.toFixed(2)}.`)
        let total = this.saldoP + lucro
        console.log(`E teria um total de R$:${total.toFixed(2)}.`)
    }

    transferCtoP(valor){
        if(valor > this.saldoC || valor < 1){
            return console.log('Erro ao transferir! Valor invalido.')
        } else{
            this.saldoP += valor
            this.saldoC -= valor
        }
    }
    transferPtoC(valor){
        if(valor > this.saldoP || valor < 1){
            return console.log('Erro ao transferir! Valor invalido.')
        } else{
            this.saldoC += valor
            this.saldoP -= valor
        }
    }
}

let jao = new Conta(1000, 2000, 1.4)
jao.deposito(1500)
jao.simulacaoJ(2)
console.log(jao)
jao.transferCtoP(1000)
console.log(jao)
jao.transferPtoC(2500)
jao.transferCtoP(2400)
console.log(jao)
jao.saque(50, 'corrente')
jao.saque(50, 'poupanca')
console.log(jao)
jao.simulacaoJ(5)
console.log(jao)

