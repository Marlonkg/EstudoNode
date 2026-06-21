const soma = (a, b) =>{
    return a + b
}
console.log(soma(12, 15))


// função para numeros aleatórios, explicando a conta...
// Math.floor arredonda pra baixo tirando as casas decimais sendo que o metodo random sempre vai ser menor que 1, o jeito burro de consertar isso é colocando o +1 na conta, multiplico a fração dada pelo max - min, depois adiciono o min para que o resultado não seja menor que ele.
function randomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}
console.log(randomNum(1, 1000))