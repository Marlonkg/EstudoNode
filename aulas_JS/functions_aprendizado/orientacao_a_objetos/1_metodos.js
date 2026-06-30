// metodos são basicamente oq eu ja fiz na calculadora, funções dentro de objetos.
const gato = {
    miar: () =>{
        console.log('Miaau')
    },
    ronronar: () =>{
        console.log('grrrggrrrggrrrggrrr')
    },
    brigar: () =>{
        console.log('ruuuuuaaaaarrr')
    }
}

//utilizando de forma normal:         nomeDaConst.nomeDaFunção
gato.miar()
gato.brigar()
gato.ronronar()


// com isso fica direto a chamada da função sem precisar mencionar o objeto
const {brigar: gBrigar, ronronar: gRonronar, miar: gMiar} = gato

gMiar()
gBrigar()
gRonronar()