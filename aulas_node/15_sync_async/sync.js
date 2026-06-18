const fs = require("fs")

console.log("inicio")

//Por essa linha usar o sync, o codigo espera isso ser executado até o fim para continuar normalmente o fluxo da aplicação.
fs.writeFileSync("arquivo.txt", "oi")

console.log("fim")