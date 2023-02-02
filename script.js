
let tela = document.querySelector(".tela");
let pincel = tela.getContext('2d');

pincel.fillStyle = 'grey';
pincel.fillRect(0,0,600,400);

let raio = 10;

function exibeCirculo(x, y, raio, cor) {
    
    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x,y, raio, 0, 2 * Math.PI);
    pincel.fill();

    console.log(event);
}

exibeCirculo(300, 200, raio+20, 'red');
exibeCirculo(300, 200, raio+10, 'white');
exibeCirculo(300, 200, raio, 'red');