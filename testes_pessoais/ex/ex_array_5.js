let nomes = ['jão', 'rodrigo', 'Marlon', 'gabi', 'jonas', 'kati']
let arr = [2, 5, 7, 3]

let elementos = (element) =>{
    if (element.length >= 5){
        console.log('muitos elementos')
    } else {
        console.log('poucos elementos')
    }
}


elementos(arr)
elementos(nomes)