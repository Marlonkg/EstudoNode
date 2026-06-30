// this. na função se referencia ao proprio objeto que está sendo editado que retira a necessidade de mencionar gato(o nome do objeto) novamente.
const gato = {
    raca: 'SRD',
    miar: () =>{
        console.log('Miaau')
    },
    ronronar: () =>{
        console.log('grrrggrrrggrrrggrrr')
    },
    brigar: () =>{
        console.log('ruuuuuaaaaarrr')
    },
    setRaca: function(racaP){
        this.raca = racaP
    },
    getRaca: function(){
        return console.log('A raça é ' + this.raca)
    }
}

// na função setRaca, defini o parametro como racaP para facilitar na visualização, mas o nome pode ser o mesmo do campa de cima. Exemplo: this.raca = raca para identificar que a informação vai ser substituida.
gato.setRaca('Siamês')
console.log(gato.raca)
gato.getRaca()