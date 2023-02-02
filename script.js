
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
}

function exibeAlvo(xAleatorio, yAleatorio) {

    exibeCirculo(xAleatorio, yAleatorio, raio+20, 'red');
    exibeCirculo(xAleatorio, yAleatorio, raio+10, 'white');
    exibeCirculo(xAleatorio, yAleatorio, raio, 'red');
}

function atualizaTela() {
    pincel.clearRect(0, 0, 600, 400);  //Limpar a tela após o alvo aparecer
    //Sortear posição aleatoria do x e y.
    let xAleatorio = Math.round(Math.random() * 600);
    let yAleatorio = Math.round(Math.random() * 400);

    exibeAlvo(xAleatorio, yAleatorio);
}

setInterval(atualizaTela, 1000);