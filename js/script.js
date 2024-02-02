// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}

document.addEventListener("DOMContentLoaded", function () {
  const moreLinks = document.querySelectorAll(".more");

  moreLinks.forEach((moreLink) => {
    moreLink.addEventListener("mouseover", function () {
      hideAllMoreSubMenus();
      const currentSubMenu = moreLink.querySelector(".more-sub-menu");
      if (currentSubMenu) {
        currentSubMenu.style.display = "block";
      }
    });

    moreLink.addEventListener("mouseout", function () {
      const currentSubMenu = moreLink.querySelector(".more-sub-menu");
      if (currentSubMenu) {
        currentSubMenu.style.display = "none";
      }
    });
  });

  function hideAllMoreSubMenus() {
    const allSubMenus = document.querySelectorAll(".more-sub-menu");
    allSubMenus.forEach((subMenu) => {
      subMenu.style.display = "none";
    });
  }
});

//acordeon
$(document).ready(function () {
  $(".card-header").click(function () {
    // self clicking close
    if ($(this).next(".card-body").hasClass("active")) {
      $(this).next(".card-body").removeClass("active").slideUp()
      $(this).children("span").removeClass("fa-minus").addClass("fa-plus")
    }
    else {
      $(".accordian-cardcard .card-body").removeClass("active").slideUp()
      $(".accordian-cardcard .card-header span").removeClass("fa-minus").addClass("fa-plus");
      $(this).next(".card-body").addClass("active").slideDown()
      $(this).children("span").removeClass("fa-plus").addClass("fa-minus")
    }
  })
})


//carrusel de imagenes 
let indice = 1;
muestraSlides(indice);

function avanzaSlide(n){
    muestraSlides(indice += n);
}

function posicionSlide(n){
    muestraSlides(indice = n);
}

setInterval(function tiempo(){
    muestraSlides(indice += 1);
}, 4000);


function mostrarImagenes(id) {
  event.preventDefault(); 
  // Ocultar todas las imágenes
  const imagenesContainers = document.querySelectorAll('.img-cont');
  imagenesContainers.forEach(container => {
    container.style.display = 'none';
  });

  // Mostrar las imágenes correspondientes al botón clicado
  const imagenesContainer = document.getElementById(id);
  imagenesContainer.style.display = 'flex';
}

//para icono de whatsaap
function toggleText() {
  var chatText = document.getElementById('chatText');
  chatText.style.display = (chatText.style.display === 'none' || chatText.style.display === '') ? 'inline' : 'none';
}


//COMERCIAL
function mostrarVideo(url) {
  document.getElementById('video-container').style.display = 'block';
  document.getElementById('video-iframe').src = url;
}

function cerrarVideo() {
  document.getElementById('video-container').style.display = 'none';
  document.getElementById('video-iframe').src = '';
}




// Mostrar y ocultar secciones miSeccionComerc
function mostrarSeccion(idSeccion) {
  // Ocultar todas las secciones primero
  ocultarTodasLasSecciones();

  var seccion = document.getElementById(idSeccion);
  seccion.style.display = 'block';
}

// Función para ocultar todas las secciones
function ocultarTodasLasSecciones() {
  var seccionStart = document.getElementById('miSeccionComerc');
  var seccionPro = document.getElementById('miSeccionComerc2');
  var seccionPremium = document.getElementById('miSeccionComerc3');

  seccionStart.style.display = 'none';
  seccionPro.style.display = 'none';
  seccionPremium.style.display = 'none';
}

// Evento para el botón de beneficios de Start
document.getElementById('mostrarSeccionBtn1').addEventListener('click', function () {
  mostrarSeccionStart('miSeccionComerc');
});

// Evento para el botón de beneficios de Pro
document.getElementById('mostrarSeccionBtn2').addEventListener('click', function () {
  mostrarSeccionPro('miSeccionComerc2');
});

// Evento para el botón de beneficios de Premium
document.getElementById('mostrarSeccionBtn3').addEventListener('click', function () {
  mostrarSeccionPremium('miSeccionComerc3');
});


// notification.js actualiando
document.addEventListener("DOMContentLoaded", function() {
  console.log("El evento DOMContentLoaded se ha disparado.");
  const notificationBar = document.createElement('div');
  notificationBar.innerHTML = '<p>Estamos trabajando en ello. Regresaremos pronto.</p>';
  notificationBar.className = 'maintenance-notification';
  document.body.prepend(notificationBar);
});
