
const numero = [1, 2, 3, 4];

const arreglo = new Array (1, 2, 3, 4, 5);

let longitud = numero.length;
console.log(longitud);

numero[2] = 50;

numero.push(80);
numero.pop(); //elimina el ultimo elemento.

numero.shift();

for (let index = 0; index < numero.length; index++); {
    const element = numero[index]
}

let posicion = numero.indexOf(4);
console.log("Vector numeros: " + numero);

arreglo.splice(2,1);

function nombrefuncion(){
    let numero = 46;
    let numero2 = 50;
    suma = numero + numero2;
    return suma;
}
