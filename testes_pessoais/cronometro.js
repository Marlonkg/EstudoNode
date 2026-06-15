let minuto = 60

const contagemR = setInterval(()=>{
    minuto--;
    console.log(minuto)

    if (minuto === 0) {
        console.log('cabou')
        clearInterval(contagemR)
    }
}, 1000)