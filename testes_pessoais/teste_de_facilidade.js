//Tentando melhorar o codigo
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
    //como só estamos tratando de numeros eu ja limitei as respostas a apenas numeros inteiros
    const re = (parseInt(respostas))
    console.log(re)

    const media = (re.p1 + re.p2 + re.p3 + re.p4 / 4)

    console.log(`A sua média de notas é ${media}`)

    if(media < 6){
        console.log('Você foi reprovado!')
    } else {
        console.log('Parabéns, você foi aprovado!')
    }
}).catch(err => console.log(err))
