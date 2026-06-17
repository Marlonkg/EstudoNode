function a(){
    console.log('executando a()')
}

function b(){
    console.log('executando b()')
}

function c(){
    console.log('executando c()')
    a()
    b()
}

//Basicamente uma aula de logica do js em geral, o programa vai executar em uma ordem de cima pra baixo, como chamamos a funcão c, ela é mencionada e logo depois A e B em ordem... 
c()

//fazendo esse outra chamada vemos ordem tbm por linhas de forma mais facil

console.log('segundo resultado abaixo:')
b()
a()
b()

