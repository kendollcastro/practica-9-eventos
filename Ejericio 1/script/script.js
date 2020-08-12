let elemento = document.querySelectorAll('.container p');
let numeromin = 0;
let numeromax = 256;

function kendollcolors(){
    let x = Math.floor(Math.random() * (numeromax - numeromin)+ numeromin);
    let y = Math.floor(Math.random() * (numeromax - numeromin)+ numeromin);
    let z = Math.floor(Math.random() * (numeromax - numeromin)+ numeromin);
    return `rgb(${x},${y},${z})`;
}
 let parrafos = document.querySelectorAll('p');

function colorNegro(event){
    const parrafos = event.currentTarget;
    parrafos.style.color = 'black';
    return parrafos
}

function cambioColor(event){
    const parrafos = event.currentTarget;
    parrafos.style.color = kendollcolors();
    return parrafos

}

for(let i = 0; i < elemento.length; i++) {
    parrafos[i].addEventListener ('mouseenter', cambioColor);
    parrafos[i].addEventListener ('mouseleave', colorNegro);

}