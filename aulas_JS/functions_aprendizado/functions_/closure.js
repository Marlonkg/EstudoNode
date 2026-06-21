// lembrança, meio confuso, mas funciona
function lembrarSoma(x){
    return function(y){
        return x + y
    }
}

// Ele guarda esse numero como (x) na função
let soma = lembrarSoma(2)

// aqui passamos 4, como 2 já é o (x) o segundo paramentro (4) é passado como o (y) da segunda função
console.log(soma(4))

//criando um contador que aumenta a base, uma funcão que retorna uma função dentro dela mesma... (Que ganbiarra do krlh, só to seguindo o roteiro)
function contador(i){
    let cont = i
    let somarContador = function(){
        console.log(cont)
        cont++
    }
    return somarContador
}

//usando meuContador ao invez ja separa o programa para começar de diferentes lugares varias vezes pelo codigo, como o meuContador é uma variavel, o valor somado continua somado até a finalização do programa. 
let meuContador = contador(7)
//+1
meuContador()
//+1
meuContador()
//+1
meuContador()
meuContador()
meuContador()
meuContador()
meuContador()
meuContador()