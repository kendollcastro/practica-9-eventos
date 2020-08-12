let elemento = document.querySelectorAll('.container p');
let numeromin = 0;
let numeromax = 256;

function kendollcolors(){
    let x = Math.floor(Math.random() * (numeromax - numeromin)+ numeromin);
    let y = Math.floor(Math.random() * (numeromax - numeromin)+ numeromin);
    let z = Math.floor(Math.random() * (numeromax - numeromin)+ numeromin);
    return `rgb(${x},${y},${z})`;
}
for(let i = 0; i < elemento.length; i++) {
    elemento[i].style.color = kendollcolors();
}
console.log(kendollcolors());