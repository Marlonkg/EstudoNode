class WordCounter{
    constructor(){

    }
    countWords(string){
        let palavras = string.split(' ')
        return palavras.length
    }
}
let texto = new WordCounter
console.log(texto.countWords('Marlon não ta sabendo metodo basico'))