document.write(
  "Tienes un array de legnuajes de programación i en un bucle while vas pidiendo el numero del elemento, y mostrando en pantalla el valor de ese elemento en el array (nombre de ese lenguaje). Para salir, escribe cero. Ejemplo: 'numero de orden?' 5, muestra javascript y pregunta otra vez 'numero de orden?', 3, y muestra el lenguaje C y va mostrando hasta que el usuario escriba 0 (cero). OJO, el numero de elemento y de indice de un array no son el mismo! (el primer elemento es el indice cero)" +
    "<hr>"
);

let lenguajes = ["Javascript", "Java", "SQL", "Python", "PHP", "C++"];
let elemento = -1;


do {

    elemento = parseInt(prompt("Dime un número del 0 al 6."));

    if (elemento === 0) {
        document.write("Adiós");
    } else if (elemento >= 1 && elemento <= 6) {
        document.write(lenguajes[elemento - 1] + "<br>");
    } else {
        document.write("El número debe ser entre 0 y 6 <br>");
    }

} while (elemento != 0);
