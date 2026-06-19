let n = 0
while(n <= 10){
    console.log(n)
    n++
}

for (let i = 100; i >= 50 ; i--){
    console.log(i)
}

//par e impar

for (let i = 0; i <= 50; i++){
    if(i % 2 == 0){
        console.log(i + ' é par')
        continue
    }else {
        console.log(i + ' é impar')
    }
}

//numeros primos
for (let i = 100; i >= 0; i--){
    if(i % 2 == 0 && i != 2){
        continue
    }else if (i % 3 == 0 && i != 3){
        continue
    }
    console.log('numero primo: ' + i)
}
