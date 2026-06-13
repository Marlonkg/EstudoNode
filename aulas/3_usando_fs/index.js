const fs = require('fs') // file system

//Função para ler um arquivo, (err) retorna um erro, caso não tenha erro, printa a (data), ou seja, a informação contida no arquivo.
fs.readFile('aulas/3_usando_fs/file.txt', 'utf8', (err, data) =>{
    if(err){
        console.log(err)
    }

    console.log(data)
})