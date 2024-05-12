// Función para el menú desplegable

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const menuList = document.querySelector(".menu-cerrado");

    menuToggle.addEventListener("click", function() {
        menuList.classList.toggle("menu-abierto");
    });

    document.addEventListener("click", function(event) {
        const target = event.target;
        if (!menuList.contains(target) && !menuToggle.contains(target)) {
            menuList.classList.remove("menu-abierto");
        }
    });

    window.addEventListener("resize", function() {
        // Cerrar el menú desplegable al cambiar el tamaño de la ventana
        menuList.classList.remove("menu-abierto");
    });
});

 

// Slider de imágenes
var sliderItems = document.querySelectorAll('.slider-item');
var currentIndex = 0;

function changeSlide() {
    sliderItems[currentIndex].style.opacity = 0;
    currentIndex = (currentIndex + 1) % sliderItems.length;
    sliderItems[currentIndex].style.opacity = 1;
}

setInterval(changeSlide, 3000); // Cambia la imagen cada 3 segundos



//<!-- Incluir la cabecera -->  
//<div id="header-placeholder"></div>
//<script>
// fetch('header.html')
 //   .then(response => response.text())
   // .then(html => document.getElementById('header-placeholder').innerHTML = html);
//</script>
//<!-- Incluir pie -->
//<div id="footer-placeholder"></div>
//<script>
//  fetch('footer.html')
//    .then(response => response.text())
  //  .then(html => document.getElementById('footer-placeholder').innerHTML = html);
//</script>