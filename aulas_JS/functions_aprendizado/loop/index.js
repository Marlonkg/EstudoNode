let x = 10

while (x > 0) {
    console.log(`O valor de X é ${x}`)
    x = x - 1
}
// aqui o x está valendo 0 pois o codigo executado primeiro foi o de cima


do {
    console.log(`valor de x é ${x}`)
    x = x + 1
} while (x <= 20)

for(let n = 1; n < 100; n = n + 10){
    console.log(n)
}

//uso do break
for(let i = 0; i <= 10; i++){
    let nome ='matheus'

    if(i == 3){
        nome == 'lucas'
        console.log('o nome lucas foi encontrado')
        break
    }
    console.log(i)

}

//uso do continue para pular uma execução (volta para executar novamente o loop)
for(let i = 0; i <= 10; i++){
    if(i % 2 == 0){
        console.log('numero par')
        continue
    }
    console.log(i)

}

//podemos adicionar +1 na variavel com nomeDaVariavel++ e subtrair -1 com nomeDaVariavel--. 
//tbm podemos resumir a adição ou subtração de numeros maiores de outra forma; nomeDaVariavel += 3 ou -=3