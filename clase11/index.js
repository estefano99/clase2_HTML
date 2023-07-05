//Paginación
var pagina = 1;
var cantidadPaginas = 0;
var numPaginacion = document.querySelector(".numero-paginacion-btn");
var btnPaginaAnterior = document.querySelector(".btn-anterior");
var btnPaginaSiguiente = document.querySelector(".btn-siguiente");

//Selectores
var main = document.querySelector("main");
var form = document.querySelector("#form");

document.addEventListener("DOMContentLoaded", function () {
  traerPersonajes();
});

var traerPersonajes = async function () {
  var response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${pagina}`
  );
  var personajes = await response.json();
  cantidadPaginas = personajes.info.pages;

  console.log(personajes);
  personajes.results.forEach((personaje) => {
    const { name, image, species } = personaje;

    var article = document.createElement("article");
    article.classList.add("card");

    article.innerHTML = `
    <img src="${image}" alt="">
    <div class="card-body">
      <p class="nombre">${name}</p>
      <p class="especie">${species}</p>
    </div>
    `;
    main.appendChild(article);
    numPaginacion.textContent = pagina;
  });
};

btnPaginaSiguiente.addEventListener("click", function () {
  paginaSiguiente();
});

var paginaSiguiente = async function () {
  if (pagina < cantidadPaginas) {
    pagina++;
    limpiarHTML();
    traerPersonajes();
    return;
  }
  alert("No hay mas paginas disponibles");
};

btnPaginaAnterior.addEventListener("click", function () {
  paginaAnterior();
});

var paginaAnterior = function () {
  if (pagina > 1) {
    pagina--;
    limpiarHTML();
    traerPersonajes();
    return;
  }
  alert("No hay mas paginas disponibles");
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  filtros();
});


var filtros = async function () {
  var nombre = document.querySelector("#nombre").value;
  var especie = document.querySelector("#especie").value;

  try {
    if (nombre !== "" && especie !== "") {
      var response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${nombre}&species=${especie}`
      );
      generarHTML(response);
      return;
    }
    
    if (nombre !== "") {
      var response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${nombre}`
        );
        generarHTML(response);
        return;
      }
      
      if (especie !== "") {
        var response = await fetch(
          `https://rickandmortyapi.com/api/character/?species=${especie}`
          );
          generarHTML(response);
          return;
    }
  } catch (error) {
    console.log(error);
  }
};

//Genera el html segun el filtro que se busque.
var generarHTML = async function (response) {
  if (response.status === 404) {
    alert("No se encontraron resultados");
    return;
  }

  var personajes = await response.json();

  limpiarHTML();

  cantidadPaginas = personajes.info.pages;

  personajes.results.forEach((personaje) => {
    const { name, image, species } = personaje;

    var article = document.createElement("article");
    article.classList.add("card");

    article.innerHTML = `
    <img src="${image}" alt="">
  <div class="card-body">
  <p class="nombre">${name}</p>
  <p class="especie">${species}</p>
  </div>
  `;
    main.appendChild(article);
    numPaginacion.textContent = 1;
  });

};

var limpiarHTML = function () {
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
};
