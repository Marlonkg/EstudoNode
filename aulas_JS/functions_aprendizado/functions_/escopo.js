//aqui podemos ver que todas as variaveis tem escopos de atuação e não se alteram dentro de determinado bloco de codigo (uma nova variavel é criada cada vez).

let a = 11

function multiplicar(x, y){
    let a = x * y

    if(a > 10){
        let a = 0

        console.log(a)
    }
    console.log(a)
}

console.log(a)
multiplicar(5, 4)