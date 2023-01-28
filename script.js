
let tela = document.querySelector(".tela");
let pincel = tela.getContext('2d');

pincel.fillStyle = 'grey';
pincel.fillRect(0,0,600,400);

function exibeCirculo(event) {
    let x = event.clientX - tela.offsetLeft;  // Pegar coordenadas da posição do click
    let y = event.clientY - tela.offsetTop;  //Tirar a borda branca que fica de fora do canvas pq ele conta com ela.

    pincel.fillStyle = 'red';
    pincel.beginPath();
    pincel.arc(x,y, 10, 0, 2 * Math.PI);
    pincel.fill();

    console.log(event);
}


tela.onclick = exibeCirculo;