var time0;
var tiempototal = 0;
var estadoComida = 100;
var estadoDormir = 100;
var estadoJuego = 100;
var ganaste = 0;
var perdiste = 0;

function initTime() {
  time0 = new Date();
  window.setInterval("updateTime()", 1000);
}
function updateTime() {
  var contador = 0;
  var timeNow = new Date();

  var segundos = timeNow.getSeconds();

  if (ganaste == 0 && tiempototal < 160) {
    contador = Math.floor(Math.random() * 3);
  }

  if (ganaste == 1 || tiempototal == 160) {
    contador = 0;
  }

  if (segundos % 2 == 0) {
    tiempototal = tiempototal + 1;
  } else {
    tiempototal = tiempototal + 1;
  }

  //Mostrar hora actual
  document.getElementById("MostrarTiempo").firstChild.data = contador;
  document.getElementById("tiempototal").firstChild.data = tiempototal;

  estadoComida = estadoComida - contador;
  estadoDormir = estadoDormir - contador;
  estadoJuego = estadoJuego - contador;

  document.getElementById("MostrarComida").firstChild.data = estadoComida;
  document.getElementById("MostrarDormir").firstChild.data = estadoDormir;
  document.getElementById("MostrarJuego").firstChild.data = estadoJuego;

  barradeestado(estadoComida, estadoDormir, estadoJuego);

  if (estadoComida < 0 || estadoDormir < 0 || estadoJuego < 0) {
    document.getElementById("juegofin").firstChild.data = "Game Over";

    document.getElementById("BarraComida").style.display = "none";
    document.getElementById("BarraDormir").style.display = "none";
    document.getElementById("BarraJuego").style.display = "none";
    document.getElementById("accionesmenu").style.display = "none";
    document.getElementById("accionesmenu2").style.display = "none";

    document.getElementById("reiniciar").style.display = "block";

    document.getElementById("gameover").style.margin = "auto";
    document.getElementById("gameover").style.display = "block";

    document.getElementById("imagengame").style.display = "none";
    perdiste = 1;
  }

  if (tiempototal == 160 && perdiste == 0) {
    ganaste = 1;

    document.getElementById("juegofin").firstChild.data = "¡Ganaste!";

    document.getElementById("BarraComida").style.display = "none";
    document.getElementById("BarraDormir").style.display = "none";
    document.getElementById("BarraJuego").style.display = "none";
    document.getElementById("accionesmenu").style.display = "none";
    document.getElementById("accionesmenu2").style.display = "none";

    document.getElementById("reiniciar").style.display = "block";

    document.getElementById("ganar").style.margin = "auto";
    document.getElementById("ganar").style.display = "block";

    document.getElementById("imagengame").style.display = "none";

    if (estadoComida < 99 || estadoDormir < 99 || estadoJuego < 99) {
      estadoComida = 100;
      estadoDormir = 100;
      estadoJuego = 100;
      contador = 0;
    }

    if (ganaste == 0) {
      contador = Math.floor(Math.random() * 3);
    }

    if (ganaste == 1) {
      contador = 0;
    }
  }
}
