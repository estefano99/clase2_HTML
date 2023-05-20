/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.Ejecutar la función y guardar el resultado en una variable, mostrando el valor dedicha variable en la consola del navegador. */
function suma(a,b) {
  return a + b;
}
var resultado = suma(10,20)
// console.log(resultado)

/*********************************************************** */
/*b. A la función suma anterior, agregarle una validación para controlar si alguno delos parámetros no es un número, mostrar una alerta aclarando que uno de losparámetros tiene error y retornar el valor NaN como resultado.  */
function dosValores(a,b) {
  if (isNaN(a) || isNaN(b) ) {
    // alert('Los valores deben ser numericos');
    return NaN
  }
  return a + b;
}
var resultado2 = dosValores('a',20)
// console.log(resultado2)

/*********************************************************** */
// c. Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
function validateInteger(num) {
  if (Number.isInteger(num)) {
    return true;
  };
  return false
};
// console.log(validateInteger(0.5));

/*********************************************************** */
/* d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado). */
function ejercicio6(a,b) {
  if (isNaN(a) || isNaN(b) ) {
    alert('Los valores deben ser numericos');
    return NaN
  }else{
    validacion(a,b);
  }
}

function validacion(num1,num2) {
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    alert('Hay decimales');
    var resultado = 'Numeros convertidos: ' + parseInt(num1) + ' - ' + parseInt(num2);
    console.log(resultado)
    return resultado;
  }
}

var mostrarValidacion = ejercicio6(10.1,20);