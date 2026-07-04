class Loja{
    constructor(camisa, calca, bermuda, bone){
        this.camisa = camisa
        this.calca = calca
        this.bermuda = bermuda
        this.bone = bone
    }
    carrinho(itens){
        this.itens = itens
        let noCarinho = []
        noCarinho += this.itens
        return console.log(noCarinho)
    }
    add (item){
        this.item = item
        if(this.item = this.camisa){
            return this.carrinho(this.camisa)
        }
    }
    remove(){

    }
}
let meusItens = new Loja(40, 70, 30, 20)
meusItens.add('camisa')
meusItens.add('calça')
meusItens.add('bermuda')

// ta dificil essa bagaça, não tenho conhecimento o suficiente não!

