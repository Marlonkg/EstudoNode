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


// era algo tao simples...
function decr(a){
    if(a % 2 != 0){
        a--
        return decr(a)
    } else if(a == 0){
        console.log('programa encerado.')
    } else {
        console.log(`${a} é par`)
        a--
        return decr(a)
    }
}

decr(79)