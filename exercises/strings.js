// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase)
var convertirAMayuscula = 'holamundoooo';
convertirAMayuscula = convertirAMayuscula.toUpperCase(); 

/*********************************************************** */
// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevostring con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
var ejerciciob = 'estudiantesdelaplata';
var resultado;
resultado = ejerciciob.substring(0,5);

/*********************************************************** */
// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable(utilizar substring).
var ejercicioc = 'estudiantesdelaplata';
var resultadoc;
resultadoc = ejercicioc.substring(ejercicioc.length - 3);


/*********************************************************** */
// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevostring con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
var ejerciciod = 'estudiantesdelaplata';
var mayuscula = ejerciciod.substring(0,1).toUpperCase();
var minuscula = ejerciciod.substring(1).toLocaleLowerCase();
var resultadoD = mayuscula + minuscula;

/*********************************************************** */
// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio enblanco. Encontrar la posición del primer espacio en blanco y guardarla en unavariable (utilizar indexOf).
var ejercicioe = 'hola que tal';
var resultadoe = ejercicioe.indexOf(' ');

/*********************************************************** */
// f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring,toUpperCase, toLowerCase y el operador +)
var ejerciciof = 'hola mundo';
var palabra1 = ejerciciof.substring(0,ejerciciof.indexOf(' ')); //Corta en el espacio
var palabra2 = ejerciciof.substring(ejerciciof.indexOf(' ') + 1); //Le sumo 1 porque sino me cuenta el espacio tambien
var primer_mayuscula = palabra1.substring(0,1).toUpperCase(); //Pasa a mayuscula el primer caracter
var segunda_mayuscula = palabra2.substring(0,1).toUpperCase(); //Pasa a mayuscula el primer caracter
var resultado;
resultado = primer_mayuscula + palabra1.substring(1).toLowerCase() + ' ' + segunda_mayuscula + palabra2.substring(1).toLowerCase()