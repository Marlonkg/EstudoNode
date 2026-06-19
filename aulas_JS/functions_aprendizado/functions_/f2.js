const inquirer = require('inquirer')
//isso deveria estar em teste pessoal, mas ja instalei a dependencias aqui ent vai aq mesmo 


// mini calculadora desnecessariamente grande
inquirer.prompt([
    {
        name: 'p1', message: 'Qual operação deseja fazer?\n 1- Adição \n 2- subtração \n 3- multiplicação \n 4- divisão \n'
    }
]).then((resposta) =>{
    if (resposta.p1 == 1){
        inquirer.prompt([
            {
                name: 'n1', message: 'primeiro numero:\n'
            },{
                name: 'n2', message: 'segundo numero:\n'
            }
        ]).then((num) =>{
            let a = parseInt(num.n1)
            let b = parseInt(num.n2)
            console.log(`${mais(a, b)}`)
        }).catch(err => console.log(err))

    }else if (resposta.p1 == 2){

        inquirer.prompt([
            {
                name: 'n1', message: 'primeiro numero:\n'
            },{
                name: 'n2', message: 'segundo numero:\n'
            }
        ]).then((num) =>{
            let a = parseInt(num.n1)
            let b = parseInt(num.n2)
            console.log(`${menos(a, b)}`)
        }).catch(err => console.log(err))

    }else if (resposta.p1 == 3){

        inquirer.prompt([
            {
                name: 'n1', message: 'primeiro numero:\n'
            },{
                name: 'n2', message: 'segundo numero:\n'
            }
        ]).then((num) =>{
            let a = parseInt(num.n1)
            let b = parseInt(num.n2)
            console.log(`${mult(a, b)}`)
        }).catch(err => console.log(err))

    }else if (resposta.p1 == 4){

        inquirer.prompt([
            {
                name: 'n1', message: 'primeiro numero:\n'
            },{
                name: 'n2', message: 'segundo numero:\n'
            }
        ]).then((num) =>{
            let a = parseInt(num.n1)
            let b = parseInt(num.n2)
            console.log(`${div(a, b)}`)
        }).catch(err => console.log(err))

    }else {
        console.log('resposta invalida')
    }
}).catch(err => console.log(err))


function mais(a, b){
    return a + b
}
function menos(a, b){
    return a - b
}
function mult(a, b){
    return a * b
}
function div(a, b){
    return a / b
}
