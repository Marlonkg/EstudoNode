//readline é um core module muito util, declaramos input e output para podermos receber respostas e responder de acordo com a resposta.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

//Não estudei ainda, mas isso com uso de functions ja pode dar alguns programas bem legais. 
readline.question("Qual seu anime preferido?", (anime) =>{
    if(anime == 'Naruto'){
        console.log(`Aquele que um balanço é protagonista?`)
        console.log(`Fã de ${anime} nem existe.`)
    } else {
        console.log(`Que coincidência, também gosto de ${anime}.`)
    }
    readline.close()
})