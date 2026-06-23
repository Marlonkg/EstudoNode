function isPalindrome(palavra){
    //isso deixa a palavra toda em minusculo e retira espaços em branco.
    palavra = palavra.toLowerCase().replace(/\s/g, '')
    //inverte a palavra
    let PalavraRevertida = palavra.split('').reverse().join('')

    return palavra === PalavraRevertida
}
console.log(isPalindrome('radar'))