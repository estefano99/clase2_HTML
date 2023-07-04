var form = document.querySelector(".form");
//INPUTS
var nombreCompleto = document.querySelector("#nombre_completo");
var email = document.querySelector("#email");
var contrasenia = document.querySelector("#contrasenia");
var repetir_contrasenia = document.querySelector("#repetir_contrasenia");
var edad = document.querySelector("#edad");
var telefono = document.querySelector("#telefono");
var direccion = document.querySelector("#direccion");
var ciudad = document.querySelector("#ciudad");
var codigo_postal = document.querySelector("#codigo_postal");
var dni = document.querySelector("#dni");

//DIVS CON MENSAJE DE ERROR
var error_nombre = document.querySelector("#error_nombre");
var error_mail = document.querySelector("#error_email");
var error_contrasenia = document.querySelector("#error_contrasenia");
var error_repetir = document.querySelector("#error_repetir");
var error_edad = document.querySelector("#error_edad");
var error_telefono = document.querySelector("#error_telefono");
var error_direccion = document.querySelector("#error_direccion");
var error_ciudad = document.querySelector("#error_ciudad");
var error_codigo_postal = document.querySelector("#error_codigo");
var error_dni = document.querySelector("#error_dni");

//Nombre
nombreCompleto.addEventListener("blur", function (e) {
  var nombre = e.target.value;
  var tieneEspacio = /^(\S+\s{1}\S+)$/.test(nombre);

  if (nombre.length < 6) {
    error_nombre.textContent = "Debe tener más de 6 caracteres";
    nombreCompleto.classList.add("input_error");
    return;
  }

  if (!tieneEspacio) {
    error_nombre.textContent = "Debe contener un espacio";
    nombreCompleto.classList.add("input_error");
    return;
  }

  nombreCompleto.classList.remove("input_error");
});

nombreCompleto.addEventListener("focus", function () {
  error_nombre.textContent = "";
  nombreCompleto.classList.remove("input_error");
});

//Email
email.addEventListener("blur", function (e) {
  var email_value = e.target.value;

  if (email_value.indexOf("@") === -1) {
    error_mail.textContent = "Debe contener @";
    email.classList.add("input_error");
    return;
  }

  email.classList.remove("input_error");
});

email.addEventListener("focus", function () {
  error_mail.textContent = "";
  email.classList.remove("input_error");
});

//CONTRASEÑA
contrasenia.addEventListener("blur", function (e) {
  var contrasenia_value = e.target.value;

  if (contrasenia_value.length < 8) {
    error_contrasenia.textContent = "Debe contener al menos 8 caracteres";
    contrasenia.classList.add("input_error");
    return;
  }

  var tieneCaracteresYNumeros = /[a-zA-Z].*\d|\d.*[a-zA-Z]/.test(
    contrasenia_value
  );

  if (!tieneCaracteresYNumeros) {
    error_contrasenia.textContent = "Debe contener caracteres y números";
    contrasenia.style.classList.add("input_error");
    return;
  }

  contrasenia.classList.remove("input_error");
});

contrasenia.addEventListener("focus", function (e) {
  error_contrasenia.textContent = "";
  contrasenia.classList.remove("input_error");
});

//REPETIR CONTRASEÑA
repetir_contrasenia.addEventListener("blur", function (e) {
  repetir_value = e.target.value;

  if (contrasenia.value !== repetir_value) {
    repetir_contrasenia.classList.add("input_error");
    error_repetir.textContent = "Las contraseñas deben ser iguales";
    return;
  }

  repetir_contrasenia.classList.remove("input_error");
});

repetir_contrasenia.addEventListener("focus", function () {
  error_repetir.textContent = "";
  repetir_contrasenia.classList.remove("input_error");
});

//EDAD
edad.addEventListener("blur", function (e) {
  var edad_value = e.target.value;

  if (edad_value % 1 !== 0) {
    edad.classList.add("input_error");
    error_edad.textContent = "Edad mal ingresada";
    return;
  }

  if (edad_value < 18) {
    edad.classList.add("input_error");
    error_edad.textContent = "Debe ser mayor de 17 años";
    return;
  }

  edad.classList.remove("input_error");
});

edad.addEventListener("focus", function () {
  error_edad.textContent = "";
  edad.classList.remove("input_error");
});

//TELEFONO
telefono.addEventListener("blur", function (e) {
  var telefono_value = e.target.value;

  var caracteresInvalidos = /[()\s-]/g; //Caracteres invalidos
  var tieneString = /[a-zA-Z]/.test(telefono_value);

  if (caracteresInvalidos.test(telefono_value)) {
    telefono.classList.add("input_error");
    error_telefono.textContent =
      "No debe contener espacios,guíones o parentesis";
    return;
  }

  if (telefono_value.length < 7) {
    telefono.classList.add("input_error");
    error_telefono.textContent = "Mínimo 7 dígitos";
    return;
  }

  if (tieneString) {
    telefono.classList.add("input_error");
    error_telefono.textContent = "Solo números";
    return;
  }

  error_telefono.textContent = "";
  telefono.classList.remove("input_error");
});

telefono.addEventListener("focus", function () {
  error_telefono.textContent = "";
  telefono.classList.remove("input_error");
});

//DIRECCION
direccion.addEventListener("blur", function (e) {
  var direccion_value = e.target.value;
  var tieneCaracteresYNumeros = /[a-zA-Z].*\d|\d.*[a-zA-Z]/.test(
    direccion_value
  );

  if (direccion_value.length < 5) {
    direccion.classList.add("input_error");
    error_direccion.textContent = "Necesita al menos 5 dígitos";
    return;
  }

  if (!tieneCaracteresYNumeros) {
    direccion.classList.add("input_error");
    error_direccion.textContent = "Debe tener letras y números";
    return;
  }

  if (direccion_value.indexOf(" ") === -1) {
    console.log(direccion_value);
    direccion.classList.add("input_error");
    error_direccion.textContent = "Debe tener espacios";
    return;
  }

  error_direccion.textContent = "";
  direccion.classList.remove("input_error");
});

//CIUDAD
ciudad.addEventListener("blur", function (e) {
  var ciudad_value = e.target.value;

  if (ciudad_value.length < 3) {
    ciudad.classList.add("input_error");
    error_ciudad.textContent = "Míinimo 3 caracteres";
    return;
  }

  ciudad.classList.remove("input_error");
  error_ciudad.textContent = "";
});

ciudad.addEventListener("focus", function () {
  ciudad.classList.remove("input_error");
  error_ciudad.textContent = "";
});

//CODIGO POSTAL
codigo_postal.addEventListener("blur", function (e) {
  var codigo_value = e.target.value;

  if (codigo_value.length < 3) {
    codigo_postal.classList.add("input_error");
    error_codigo_postal.textContent = "Míinimo 3 caracteres";
    return;
  }

  codigo_postal.classList.remove("input_error");
  error_codigo_postal.textContent = "";
});

codigo_postal.addEventListener("focus", function () {
  codigo_postal.classList.remove("input_error");
  error_codigo_postal.textContent = "";
});

//DNI
dni.addEventListener("blur", function (e) {
  var dni_value = e.target.value;
  var validacionString = /[a-zA-Z]/.test(dni_value);

  if (validacionString) {
    dni.classList.add("input_error");
    error_dni.textContent = "Solo números";
    return;
  }

  if (dni_value.length < 7 || dni_value.length > 8) {
    dni.classList.add("input_error");
    error_dni.textContent = "Míinimo 7 y máximo 8 dígitos";
    return;
  }

  dni.classList.remove("input_error");
  error_dni.textContent = "";
});

dni.addEventListener("focus", function () {
  dni.classList.remove("input_error");
  error_dni.textContent = "";
});

form.addEventListener("submit", validarCampos);

//Submit del form
var modal = document.querySelector(".modal"); //Modal
var contenido; //Contiene el objeto a mandar

function validarCampos(e) {
  e.preventDefault();

  contenido = {
    nombreCompleto: nombreCompleto.value,
    email: email.value,
    contrasenia: contrasenia.value,
    repetir_contrasenia: repetir_contrasenia.value,
    edad: edad.value,
    telefono: telefono.value,
    direccion: direccion.value,
    ciudad: ciudad.value,
    codigo_postal: codigo_postal.value,
    dni: dni.value,
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contenido),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      confirmacion(data);
    })
    .catch(function (error) {
      errorPeticion(error);
    });
}

var modalContent = document.querySelector(".modal-content"); //DIV dentro del modal que contiene las palabras
var h3Modal = document.querySelector("#h3-modal");
var pModal = document.querySelector("#parrafo-modal");

function confirmacion(data) {
  h3Modal.textContent = "Se enviaron los datos correctamente. ";
  localStorage.setItem("form", JSON.stringify(contenido));

  for (let key in data) {
    pModal.innerHTML += key + ": " + data[key] + " - ";
  }

  modal.style.display = "flex";
  modalContent.style.border = "green 4px solid";
}

function errorPeticion(error) {
  h3Modal.textContent = "Hubo un error: " + error;
  modal.style.display = "flex";
  modalContent.style.border = "red 4px solid";
}

//Cierra el modal
var modal_cerrar = document.querySelector("#modal_cerrar");

modal_cerrar.addEventListener("click", function () {
  modal.style.display = "none";
});

//Utilice el metodo keyup , porque el metodo keydown no muestra la ultima letra.
nombreCompleto.addEventListener("keyup", function (e) {
  var titulo = document.querySelector("#titulo_form");
  titulo.textContent = "HOLA " + e.target.value;
});

//Guarda los datos del localStorage en el Form
window.addEventListener("load", function () {
  if (localStorage.getItem("form")) {
    var datos = localStorage.getItem("form");
    datos = JSON.parse(datos);
    nombreCompleto.value = datos.nombreCompleto;
    email.value = datos.email;
    contrasenia.value = datos.contrasenia;
    repetir_contrasenia.value = datos.repetir_contrasenia;
    edad.value = datos.edad;
    telefono.value = datos.telefono;
    direccion.value = datos.direccion;
    ciudad.value = datos.ciudad;
    codigo_postal.value = datos.codigo_postal;
    dni.value = datos.dni;
  }
});
