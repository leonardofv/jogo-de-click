
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

let xAleatorio;
let yAleatorio; //Declaro sem conteúdo pois vou verificar seu valor dentro de uma função.

function exibeAlvo(xAleatorio, yAleatorio) {

    exibeCirculo(xAleatorio, yAleatorio, raio+20, 'red');
    exibeCirculo(xAleatorio, yAleatorio, raio+10, 'white');
    exibeCirculo(xAleatorio, yAleatorio, raio, 'red');
}

function limpaTela() {

    pincel.clearRect(0, 0, 600, 400);  //Limpar a tela após o alvo aparecer
}

function atualizaTela() {
    
    limpaTela();
    //Sortear posição aleatoria do x e y.
    xAleatorio = Math.round(Math.random() * 600);
    yAleatorio = Math.round(Math.random() * 400);

    exibeAlvo(xAleatorio, yAleatorio);
}

setInterval(atualizaTela, 1000);

function dispara(event) {

    let x = event.pageX - tela.offsetLeft;
    let y = event.pageY - tela.offsetTop;

    if( (x > xAleatorio - raio) 
        && (x < xAleatorio + raio) 
        && (y > yAleatorio - raio)
        && (y < yAleatorio + raio) ) {
            alert('Acertou');
        }

    console.log(event);
}

tela.onclick = dispara;