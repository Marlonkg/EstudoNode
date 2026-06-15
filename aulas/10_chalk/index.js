// chalk serve para estilização do console, só pode ser usado no tipo de import moderno tendo que mudar o package commonJS para module
import chalk from 'chalk';

const nota = 4

if( nota < 6){
    console.log(chalk.yellow.bgRed.bold('Você está reprovado!'))
} else {
    console.log(chalk.green('Parabens, você passou!'))
}