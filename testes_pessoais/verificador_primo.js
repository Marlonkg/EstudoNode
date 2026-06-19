let n = 1
if((n % 2 == 0 || n % 3 == 0) && n > 3){
    console.log(`o numero ${n} é composto`)
}else if (n == 1) {
    console.log('1 não é numero primo e nem composto')
} else {
    console.log(`o numero ${n} é primo`)
}