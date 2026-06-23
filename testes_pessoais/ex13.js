
//contador de vogais
function countVowels(texto, contador=0){
    if(texto * 0 == 0 || texto == undefined || texto == NaN || texto == ''){
        return console.log('não aceitamos numero')
    } else {
    texto = texto.toLowerCase().trim()
    }
    if (texto.includes('a') == true){
        let textoMod = texto.replace('a', 'x')
        contador++
        return countVowels(textoMod, contador)
    } else if (texto.includes('e') == true){
        let textoMod = texto.replace('e', 'x')
        contador++
        return countVowels(textoMod, contador)
    } else if (texto.includes('i') == true){
        let textoMod = texto.replace('i', 'x')
        contador++
        return countVowels(textoMod, contador)
    } else if (texto.includes('o') == true){
        let textoMod = texto.replace('o', 'x')
        contador++
        return countVowels(textoMod, contador)
    } else if (texto.includes('u') == true){
        let textoMod = texto.replace('u', 'x')
        contador++
        return countVowels(textoMod, contador)
    } 
    return console.log(contador)
}

countVowels("Belo");
countVowels("JavaScript");
countVowels("Carro");
countVowels(44)
countVowels('')
countVowels(undefined)
countVowels(NaN)

