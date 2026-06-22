function decrement(a){
    while(a > 0){
        if(a % 2 != 0){
            a--
        } else {
            console.log(`${a} é par`)
            a--
        }
    }
}


// essa porcaria ta errada, arrumo depois
function decr(a){
    if(a % 2 != 0){
        a = a - 1
    } else if(a == 0){
        console.log('programa encerado.')
    } else {
        console.log(`${a} é par`)
        a = a -1
        return decr(a)
    }
}

decr(79)