let cachorro = {
    patas: 4,
    raca: 'SRD',
    latir: () =>{
        console.log('AU AU')
    }
}

//ele herda tudo de cachorro
let labrador = Object.create(cachorro)
labrador.raca = 'Labrador'

console.log(cachorro)
console.log(labrador)
console.log(labrador.raca)
console.log(labrador.patas)
labrador.latir()