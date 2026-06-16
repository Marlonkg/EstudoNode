// Programa para calculo de médio de um ano, 4 bimestres.
const inquirer = require('inquirer')

inquirer.prompt([
    {
        name: 'p1', message: 'Primeira nota:'
    }, {
        name: 'p2', message:'Segunda nota:'
    }, {
        name: 'p3', message:'Terceira nota:'
    }, {
        name: 'p4', message:'Quarta nota:'
    }
]).then((respostas) =>{
    console.log(respostas)

    //Como quase sempre, recebemos os dados em string e precisamos converter para numeros
    const media = ((parseInt(respostas.p1) + parseInt(respostas.p2) + parseInt(respostas.p2) + parseInt(respostas.p4)) / 4)

    console.log(`A sua média de notas é ${media}`)

    if(media < 6){
        console.log('Você foi reprovado!')
    } else {
        console.log('Parabéns, você foi aprovado!')
    }
}).catch(err => console.log(err))

