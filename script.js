
let tela = document.querySelector(".tela");
let pincel = tela.getContext('2d');

pincel.fillStyle = 'grey';
pincel.fillRect(0,0,600,400);

function exibeAlerta(event) {
    alert("Cliquei");
    console.log(event);
}


tela.onclick = exibeAlerta;