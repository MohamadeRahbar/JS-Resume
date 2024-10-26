setInterval(bgChanger,2000)

function bgChanger() {
    let colorR = Math.floor(Math.random() * 256)
    let colorG = Math.floor(Math.random() * 256)
    let colorB = Math.floor(Math.random() * 256)

    document.body.style.backgroundColor = `rgb(${colorR} ,${colorG} ,${colorB})`
    console.log('R= ' + colorR , 'G = ' + colorG , 'B = '+colorB);
}  
