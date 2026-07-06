//copiando codigo do professor para estudar
class Carrinho{
    constructor(itens, qtd, valorTotal){
        this.itens = itens
        this.qtd = qtd
        this.valorTotal = valorTotal   
    }
    addItem(item){
        //me pareceu gambiarra, o contador muda de valor caso o if dentro do loop seja verdadeiro, caso for falso, continua 0 e pula o segundo if.
        let contador = 0

        // A variavel item carrinho percorre todo o array de itens e combina ids do item adicionado agr e aqueles que ja estão no carrinho, caso já exista, ele altera o campo do item adicionando mais itens conforme a qtd indicada.
        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id){
                this.itens[itemCarrinho].qtd += item.qtd
                contador = 1
            }
        }

        //gambiarra
        if(contador == 0){
            //push para adicionar o item no carrinho
            this.itens.push(item)
        }

        // Aumenta o segundo parametro que a classe exige, o QTD
        this.qtd += item.qtd

        //Operação basica para conseguir o preço total a partir de agora, preçoDoItem X qtd e soma ao valor total...
        this.valorTotal += item.preco * item.qtd
    }

    // não entendi essa função inteira
    removeItem(item){
        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id){
                
                let obj = this.itens[itemCarrinho]
                let index = this.itens.findIndex(function(obj){return obj.id == item.id})

                this.qtd -= this.itens[itemCarrinho].qtd
                this.valorTotal -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd

                this.itens.splice(index, 1)
            }
        }

    }
}

let carrinho = new Carrinho([
    {
        id: 1,
        nome: "camisa",
        qtd: 1,
        preco: 20
    },
    {
        id: 2,
        nome: "calca",
        qtd: 2,
        preco: 50
    },
    
], 3, 120) 

carrinho.addItem({id: 3, nome: "bermuda", qtd: 3, preco: 18})
console.log(carrinho)

carrinho.removeItem({id: 2, nome: "calca", qtd: 1, preco: 50})
console.log(carrinho)

