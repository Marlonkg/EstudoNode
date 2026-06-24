let marca = 'Nike'

//tudo maiusculo
console.log(marca.toUpperCase())

let marca2 = marca.toUpperCase()


// tudo minusculo
console.log(marca2.toLowerCase())

//como inseri um 'metodo' na marca2, o js cria uma função encima da string para deixar ele todo minusculo, assim retornando uma função no typeof e não uma string.
console.log(typeof marca2.toLowerCase())

/* 
        A diferença de propriedade e metodo

        string.propriedade
        string.metodo()

        metodo sempre espera que vc abra parenteses para adicionar paramentros, mesmo que os mantenha vazio.
*/