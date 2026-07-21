//Sistema de Biblioteca
class Livro {
    constructor(titulo, autor, disponivel = true){
        this.titulo = titulo
        this.autor = autor
        this.disponivel = disponivel
    }
    emprestar(){
        if(this.disponivel == true){
            console.log(`Boa leitura de ${this.titulo}, não danifique, por favor...`)
            this.disponivel = false
        } else{
            console.log('O livro não está disponivel.')
        }
    }
    devolver(){
        if(this.disponivel == false){
            console.log(`Obrigado pela preferencia, voce devolveu ${this.titulo}.`)
            this.disponivel = true
        } else{
            console.log('Houve algum engano, o livro sempre esteve aqui.')
        }
    }
    consultarDisponibilidade(){
        if(this.disponivel == true){
            console.log(`O livro ${this.titulo} está disponivel`)
        } else{
            console.log(`O livro ${this.titulo} não está disponivel.`)
        }
    }
}

let livro1 = new Livro('Harry Potter e a Pedra de Crack', 'Roberto Carlos (no auge)', true)

livro1.consultarDisponibilidade()
livro1.emprestar()
livro1.emprestar()
livro1.devolver()
livro1.devolver()
livro1.emprestar()
livro1.consultarDisponibilidade()

