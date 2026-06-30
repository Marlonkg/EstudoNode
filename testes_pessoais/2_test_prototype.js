//
const animal = { tipo: "ser vivo" };

// objeto que herda caracteristicas de animal
const gato = Object.create(animal);

// caracteristica propria
gato.nome = "Mimi";
gato.miar = () =>{
    console.log('Miiiaaau')
}

// hasOwnProperty verifica se a função ou caracteristica é herdada ou própria.
console.log(gato.hasOwnProperty("nome"))  // true
console.log(gato.hasOwnProperty('miar')) // true

console.log(gato.hasOwnProperty("tipo")) // false, pois pertence ao objeto animal

console.log("tipo" in gato) // true, verifica em ambito geral, se pertence as funções ou caracteristicas herdadas.


gato.miar()

