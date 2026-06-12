const express = require('express')
const app = express()

//rota principal
app.get('/', function(req, res){
    res.send('Minha primeira rota!')
})

app.get('/sobre', function(req, res){
    res.send('Minha rota sobre!')
})

app.get('/blog', function(req, res){
    res.send('Aqui é o blog!')
})


//Para ligar o servidor local na porta 8080
app.listen(8080, function(){
    console.log("Servidor rodando na url http://localhost:8080")
})