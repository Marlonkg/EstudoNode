// basicamente um loop que mostra numeros pares.
function recursividade(n){
    if(n < 1){
        console.log('recursividade parou')
    } else if (n % 2 != 0){
        console.log('numero impar: ' + n)
        recursividade(n - 1)
    }else {
        console.log('Numero par: ' + n)
        recursividade(n-2)
    }
}
recursividade(12)
recursividade(7)