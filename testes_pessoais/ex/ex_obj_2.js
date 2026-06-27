let onibus = {
    rodas: 8,
    passageiros: 40,
    portas: 2
}

console.log(onibus.rodas, onibus.passageiros, onibus.portas)

//ou 

let {rodas: r, passageiros: pa, portas: po } = onibus
console.log(r, pa, po)