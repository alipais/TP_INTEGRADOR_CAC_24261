// Función para el menú desplegable
document.addEventListener("DOMContentLoaded", function() {
    var menuToggle = document.getElementById("menu-toggle");
    var menuList = document.querySelector(".menu-cerrado");

    if (menuToggle && menuList) {
        menuToggle.addEventListener("click", function() {
            menuList.classList.toggle("menu-abierto");
        });
    }

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

// Slider
var sliderItems = document.querySelectorAll('.slider-item');
var currentIndex = 0;
var sliderInterval;

function changeSlide() {
    sliderItems[currentIndex].style.opacity = 0;
    currentIndex = (currentIndex + 1) % sliderItems.length;
    sliderItems[currentIndex].style.opacity = 1;
}

function irATienda() {
    clearInterval(sliderInterval); // Detener el intervalo del slider
    window.location.href = './paginas/shop.html';
}

sliderInterval = setInterval(changeSlide, 3000); // Iniciar el intervalo del slider




