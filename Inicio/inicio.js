let cont1 = 1; 
document.getElementById("slider1-radio1").checked = true;

setInterval(function() {
    nextImage1();
}, 5000)

function nextImage1(){
    cont1++;
    if(cont1 > 4) {
        cont1 = 1;
    }

    document.getElementById("slider1-radio"+cont1).checked = true;
}
/*let cont2 = 1; 
document.getElementById("slider2-radio1").checked = true;

setInterval(function() {
    nextImage2();
}, 5000)

function nextImage2(){
    cont2++;
    if(cont2>4){
        cont2 = 1;
    }

    document.getElementById("slider2-radio"+cont2).checked = true;
}*/

window.addEventListener("scroll", function(){
    let header = this.document.querySelector('header')
    header.classList.toggle('rolagem', this.window.scrollY > 0)
})
window.addEventListener("scroll", function(){
    let header_mobile = this.document.querySelector('header-mobile')
    header-mobile.classList.toggle('rolagem', this.window.scrollY > 0)
})