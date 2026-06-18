//teste de idade mais antigo que sua vó
let idade = 10
let nome = 'Jão'

if(idade >= 18 && nome == "Jão" || nome == 'Andressa' || nome == 'Maria'){
    console.log('voce pode entrar')
} else{
    console.log('voce não pode entrar')
}


let passaporte = false
let rg = true

//segundo exemplo usando a separação de parametros
if(nome == "Jão" && idade >=18 && (passaporte == true || rg == true) ){
    console.log(`olá ${nome}, voce pode entrar.`)
}else{
    console.log(`Desculpe ${nome}, mas voce não tem permissão para entrar!`)
}

if(nome == undefined){
    console.log("o nome não foi inserido corretamente")
} else if(nome.length <= 4){
    console.log("o nome é muito pequeno, tente outro")
} else{
    console.log("nome inserido com sucesso")
}

//uso do switch
switch (nome) {
    case 'Jão':
        console.log('slk jão')
        break;
    case 'bruno':
        console.log('bruno o ze ruela')
        break
    case undefined: 
        console.log('nome indefinido')
        break
    default:
        console.log('nome nao encontrado')
        break;
}