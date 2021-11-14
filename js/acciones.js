function accionComida() {
  estadoComida = estadoComida + 31;
  //Animacion correspondiente
  document.getElementById("imagengame").src = "img/comer.gif";
  document.getElementById("botoncomer").src = "img/botoncomer.gif";

  //Limitar a maximo 100, visualmente
  if (estadoComida > 130) {
    estadoComida = 100;
  }

  var myVar = setTimeout(volver, 2000);
  function volver() {
    document.getElementById("imagengame").src = "img/normal.gif";
  }
}

function accionDormir() {
  estadoDormir = estadoDormir + 33;

  //Animacion correspondiente
  document.getElementById("imagengame").src = "img/dormir.gif";
  document.getElementById("botondormir").src = "img/botondormir.gif";

  //Limitar a maximo 100
  if (estadoDormir > 130) {
    estadoDormir = 100;
  }

  var myVar = setTimeout(volver, 2000);
  function volver() {
    document.getElementById("imagengame").src = "img/normal.gif";
  }
}

function accionJugar() {
  estadoJuego = estadoJuego + 27;

  //Animacion correspondiente
  document.getElementById("imagengame").src = "img/jugar.gif";
  document.getElementById("botonjugar").src = "img/botonjugar.gif";

  //Limitar a maximo 100
  if (estadoJuego > 130) {
    estadoJuego = 100;
  }

  var myVar = setTimeout(volver, 2000);
  function volver() {
    document.getElementById("imagengame").src = "img/normal.gif";
  }
}

function accionSobrecito() {
  estadoComida = estadoComida + 70;
  //Animacion correspondiente
  document.getElementById("imagengame").src = "img/sobrecito.gif";
  document.getElementById("botonsobrecito").src = "img/botonsobrecito.gif"; 

  //Limitar a maximo 100
  if (estadoComida > 130) {
    estadoComida = 100;
  }
  var myVar = setTimeout(volver, 2000);
  function volver() {
    document.getElementById("imagengame").src = "img/normal.gif";
  }
}

function reiniciar() {
  location.reload();
}
