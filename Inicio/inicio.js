var radio = document.querySelector('.manual-btn')
var cont = 1
document.getElementById('radio1').checked = true 

setInterval(() => {
    proximg()
}, 5000)

function proximg(){
    cont++

    if(cont > 4){
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true 
}