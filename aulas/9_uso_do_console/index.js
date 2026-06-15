// mais de uma variavel no mesmo console

const a = 10
const b = 'Judas'
const c = [1, 5]

console.log(a, b, c)

//Contagem de prints (quantas foi dado console)
//OBS: A contagem só acontece nos console.count, o console.log acima dele ou abaixo não participam da conta.
console.count(`O valor de A é ${a}, contagem:`)
console.count(`O valor de A é ${a}, contagem:`)
console.count(`O valor de A é ${a}, contagem:`)


// Variavel entre string: %s espera que uma variavel seja indicada no final para substituilo
console.log('O nome é %s, ele é alguém ai', b)

//Limpar console
setTimeout(() =>{
    console.clear()
}, 4000)