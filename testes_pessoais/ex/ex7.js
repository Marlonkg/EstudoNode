let testTamanho = function (texto){
    if(texto.length <= 10){
        console.log('texto aceito')
    }else{
        console.log('texto muito grande')
    }
}

testTamanho('texto desnecessariamente grande')
testTamanho('Textinho')