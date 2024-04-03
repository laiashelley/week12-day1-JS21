
document.write("Recorrer un array de recetas y mostrar los nombres en pantalla" + "<br>" + "<hr>");

const recetas = ["Macarrones con queso", "Lentejas con pesto",  "Garbanzos con butifarra a la cerveza",  "Ramen de miso"];

let numRecetas = recetas.length;

for (let i = 0; i < numRecetas; i++){
    document.write(recetas[i] + "<br>");
}

document.write("<br>" + "Total de elementos: " + recetas.length);