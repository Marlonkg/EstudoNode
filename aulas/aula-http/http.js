//Forma rudimentar de ligar um servidor local
var http = require('http')

//Exibir mensagem no servidor local
http.createServer(function (req, res) {
    res.end('Configurando essa maquina pre-historica!')
}).listen(8080)

//Mensagem que aperece no console quando voce liga o servidor
console.log('Servidor ligado!')