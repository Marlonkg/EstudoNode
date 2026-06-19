let cnh = false
let idade = 18

if(idade >= 18 && cnh == false){
    console.log('vc tem idade suficiente e não possui CNH')
} else if (idade >= 18 && cnh == true) {
    console.log('vc tem cnh, ja pode obter seu kwid')
} else{
    console.log('vc não atende aos requisitos')
}