//criação de objetos por meio de uma função, aqui definimos todos os paramentro na função, como criamos uma variavel/const utilizando a função, um objeto é criado na hora com aqueles paramentros passados... Um problema é que não existe a variavel cachorro, existe apenas a pastor. 
function criaCachorro(raca = 'SRD', patas = 4, nome, cor, latir){
    let cachorro = Object.create({})
    cachorro.raca = raca
    cachorro.patas = patas
    cachorro.nome = nome
    cachorro.cor = cor
    cachorro.latir = () =>{
        console.log('au au')
    }
    return cachorro
}

let pastor = criaCachorro('Pastor Alemão', 4, 'Bart', 'Castanho escuro')

console.log(pastor.nome)
pastor.latir()

//cachorro não existe mais, ele só 'fabrica' outra variavel por meio da função e se dissolve, ele recebe todas as propriedades dadas dentro da função.
//cachorro.latir()
