const inquirer = require('inquirer')
//isso deveria estar em teste pessoal, mas ja instalei a dependencias aqui ent vai aq mesmo 

//melhorando mini calculadora nem tão desnecessariamente grande 
async function calculadora() {
    const pergunta = [
        {
            type: 'list',
            name: 'op',
            message: 'Qual operação deseja?',
            choices: ['Adição', 'Subtração', 'Multiplicação', 'Divisão']
        }
    ]
    try {

        const resposta = await inquirer.prompt(pergunta)
        doisN(resposta.op)
    
    } catch (error) {

        console.error('ocorreu um erro', error)
    }
}

async function doisN(a) {
    const pergunta = [
        {
            type: 'number',
            name: 'n1',
            message: 'Digite o primeiro numero: \n'
        },{
            type: 'number',
            name: 'n2',
            message: 'Digite o segundo numero: \n'
        }
    ]
    try {

        const resposta = await inquirer.prompt(pergunta)
        if (a == 'Adição'){
            mais(resposta.n1, resposta.n2)
        }
        if(a == 'Subtração'){
            menos(resposta.n1, resposta.n2)
        }
        if(a == 'Multiplicação'){
            mult(resposta.n1, resposta.n2)
        }
        if(a == 'Divisão'){
            div(resposta.n1, resposta.n2)
        }

    } catch (error) {
        console.error('ocorreu um erro', error)
    }
    
}


calculadora()


function mais(a, b){
    return console.log('Resultado:', a + b)
}
function menos(a, b){
    return console.log('Resultado:', a - b)
}
function mult(a, b){
    return console.log('Resultado:', a * b)
}
function div(a, b){
    return console.log('Resultado:', a / b)
}
