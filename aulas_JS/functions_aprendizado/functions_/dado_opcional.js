// Aqui vejo o uso de tratamento de dados para caso não seja passado todos os dados, ele não explicou como ignora o primeiro dado caso não seja fornecido.
function soma(a, b){
    if( a == undefined || b == undefined){
        console.log(' a função precisa dos dois argumentos para continuar')
    } else {
        console.log(a + b)
    }
}

function saudacao(nome, idade){
    if (idade == undefined){
        console.log('olá ' + nome)
    }else {
        console.log(`olá ${nome}, sua idade é ${idade} anos!`)
    }
}

soma(1)
soma(1, 3)
saudacao('Jão')
saudacao('jó', 30)