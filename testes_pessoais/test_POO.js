// entendendo protopype
const animal = { comer() { 
    console.log("comendo") 
    } 
}

//criando cachorro com o prototipo de animal "usando como base", quando o novas caracteriscas forem adicionados a cachorro, as de animal tbm estaram disponiveis para ser usadas.
const cachorro = Object.create(animal)

const gato = {}

// gato agora herda de animal também, criado na hora!
Object.setPrototypeOf(gato, animal);

// gato perde a herança de animal
Object.setPrototypeOf(gato, {})

console.log(cachorro.comer())
console.log(gato.comer())
console.log()
console.log()
