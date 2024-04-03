document.write(
  "Pide dia de la semana y tiempo que hace, pasa los parametros a una funcion elTiempo() que diga: el martes hará lluvia o el jueves hará sol.(por parametros)" +
    "<br>" +
    "<hr>"
);

let diaSemana = prompt("Dime un dia de la semana:").toLowerCase();
let tiempoDia = prompt("Dime el tiempo que va a hacer:").toLowerCase();

function elTiempo(a, b) {
  document.write("El " + a + " hará " + b + ".");
}

elTiempo(diaSemana, tiempoDia);
