/* a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log) */
var arregloA = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
// console.log('Mes 5: ' + arregloA[4] + ' - Mes 11: ' + arregloA[10]);

/*********************************************************** */
// b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort)
var arregloB = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(arregloB.sort( function (a,b) {
  return a.localeCompare(b);
}));


/*********************************************************** */
// c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
var arregloC = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
arregloC.unshift('primero');
arregloC.push('ultimo');
// console.log(arregloC)


/*********************************************************** */
// d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
var arregloD = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
arregloD.shift();
arregloD.pop();
// console.log(arregloD)


/*********************************************************** */
// e. Invertir el orden del array (utilizar reverse).
var arregloE = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
arregloE.reverse();
// console.log(arregloE);


/*********************************************************** */
// f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
var arregloF = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
// console.log(arregloF.join('-'));


/*********************************************************** */
// g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre(utilizar slice).
var arregloG = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
arregloG = arregloG.slice(4,11);
// console.log(arregloG);
