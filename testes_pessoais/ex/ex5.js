function detector(a){
    if(typeof a == 'number'){
        return num(a)
    } else if(typeof a == 'boolean'){
        return testeDeFidelidade(a)
    }else {
        return letra(a)
    }
}



function letra(a){
    console.log(`detectei uma String: ` + a)
}
function testeDeFidelidade(a){
    console.log(`detectei um Boolean: ` + a)
}
function num(a){
    console.log(`detectei um Number: ` + a)
}

detector('asdojigf')
detector(123)
detector(true)