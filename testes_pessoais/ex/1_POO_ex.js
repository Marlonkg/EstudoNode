class Conta{
    constructor(nome, saldo){
        this.nome = nome
        this.saldo = saldo
    }
    saque(a){
        return this.saldo -= a
    }
    deposito(a){
        return this.saldo += a
    }
}

let marlon = new Conta('marlon', 12000)
console.log(marlon)
marlon.saque(1500)
console.log(marlon)
marlon.deposito(3000)
console.log(marlon)