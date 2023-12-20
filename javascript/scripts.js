function eliminarInicio() {
  const contenedorInicio = document.getElementById("parrafo-inicio");

  if (contenedorInicio) {
    contenedorInicio.style.display = "none";
    localStorage.setItem("eliminarInicio", "true");
  }
}

function enviarFormulario(event) {
  var nombre = document.getElementById("nombre").value;
  var correo = document.getElementById("correo").value;
  var nacimiento = document.getElementById("nacimiento").value;
  var generoRadios = document.getElementsByName("genero");
  var fecha = document.getElementById("fecha").value;
  var lugar = document.getElementById("lugar").value;
  var archivo = document.getElementById("archivo").files[0];

  if (nombre === "" || correo === "" || nacimiento === "") {
    alert("Rellene campos faltantes.");
    event.preventDefault();
    return false;
  }

  var nombreValido = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s'-]{6,}$/;
  if (!nombre.match(nombreValido)) {
    alert("El nombre debe tener al menos 6 caracteres y no debe contener caracteres especiales.");
    event.preventDefault();
    return false;
  }

  var correoValido = /^[A-Za-z0-9.]{6,}@[^@]+$/;
  if (!correo.match(correoValido)) {
    alert("Ingrese un correo electrónico válido y mayor de 6 caracteres antes de la arroba.");
    event.preventDefault();
    return false;
  }

  var generoSeleccionado = false;
  for (var i = 0; i < generoRadios.length; i++) {
    if (generoRadios[i].checked) {
      generoSeleccionado = true;
      break;
    }
  }
  if (!generoSeleccionado) {
    alert("Por favor, seleccione una opción para el género.");
    event.preventDefault();
    return false;
  }

  if (fecha === "seleccione_opcion") {
    alert("Por favor, seleccione al menos una opción para la fecha.");
    event.preventDefault();
    return false;
  }

  if (lugar === "seleccione_opcion2") {
    alert("Por favor, seleccione una opción para el lugar.");
    event.preventDefault();
    return false;
  }

  if (!archivo) {
    alert("Por favor, cargue un archivo.");
    event.preventDefault();
    return false;
  }
  return true;
}

function botonVuelta() {
  var arribaBtn = document.getElementById("boton-volver");

  window.addEventListener("scroll", function() {
    if (document.documentElement.scrollTop > 100) {
      arribaBtn.style.display = "block";
    } else {
      arribaBtn.style.display = "block"; 
    }
  });

  arribaBtn.addEventListener("click", function() {
    document.documentElement.scrollTop = 0;
  });
}

document.addEventListener('DOMContentLoaded', function () {

  const currentLocation = window.location.href;

  const navLinks = document.querySelectorAll('#indice-pagina nav ul li a');

  navLinks.forEach(link => {
      if (link.href === currentLocation) {
          link.classList.add('current');
      }
  });
});

function cerrarIndice() {
  var indice = document.getElementById("indice-index");
  indice.style.display = "none";
  document.getElementById("abrir-indice").style.display = "block";
}

function abrirIndice() {
  var indice = document.getElementById("indice-index");
  indice.style.display = "block";
  document.getElementById("abrir-indice").style.display = "none";
}

function abrirHamburguesa() {
  var menu = document.getElementById("indice-pagina");
  if (menu.style.display === "none" || menu.style.display === "") {
      menu.style.display = "block";
  } else {
      menu.style.display = "none";
  }
}
