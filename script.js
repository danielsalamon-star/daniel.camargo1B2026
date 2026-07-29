let curtidas = 0;

function curtir(){

curtidas++;

document.getElementById("contador").innerHTML =
"Curtidas: " + curtidas;

}

function modoEscuro(){

document.body.classList.toggle("dark");

}