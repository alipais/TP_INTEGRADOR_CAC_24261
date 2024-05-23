document.addEventListener("DOMContentLoaded", function () {
    // Función para el menú desplegable
    var menuToggle = document.getElementById("menu-toggle");
    var menuList = document.querySelector(".menu-cerrado");

    if (menuToggle && menuList) {
        menuToggle.addEventListener("click", function () {
            menuList.classList.toggle("menu-abierto");
        });

        document.addEventListener("click", function (event) {
            const target = event.target;
            if (!menuList.contains(target) && !menuToggle.contains(target)) {
                menuList.classList.remove("menu-abierto");
            }
        });

        window.addEventListener("resize", function () {
            // Cerrar el menú desplegable al cambiar el tamaño de la ventana
            menuList.classList.remove("menu-abierto");
        });

        // Manejar el submenú
        var submenuToggles = document.querySelectorAll(".submenu-toggle");
        submenuToggles.forEach(function (submenuToggle) {
            submenuToggle.addEventListener("click", function (event) {
                event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
                var submenu = this.nextElementSibling;
                submenu.classList.toggle("submenu-abierto");
            });
        });

        // Cerrar el submenú al hacer clic fuera
        document.addEventListener("click", function (event) {
            const target = event.target;
            submenuToggles.forEach(function (submenuToggle) {
                var submenu = submenuToggle.nextElementSibling;
                if (submenu && !submenuToggle.contains(target) && !submenu.contains(target)) {
                    submenu.classList.remove("submenu-abierto");
                }
            });
        });

        window.addEventListener("resize", function () {
            // Cerrar los submenús al cambiar el tamaño de la ventana
            var submenus = document.querySelectorAll(".submenu");
            submenus.forEach(function (submenu) {
                submenu.classList.remove("submenu-abierto");
            });
        });
    } else {
        console.warn('No se encontraron elementos con la clase .menu-cerrado');
    }

    // Slider
    var sliderItems = document.querySelectorAll('.slider-item');
    if (sliderItems.length > 0) {
        var currentIndex = 0;
        sliderItems[currentIndex].style.opacity = 1;

        function changeSlide() {
            sliderItems[currentIndex].style.opacity = 0;
            currentIndex = (currentIndex + 1) % sliderItems.length;
            sliderItems[currentIndex].style.opacity = 1;
        }

        setInterval(changeSlide, 3000); // Iniciar el intervalo del slider
    } else {
        console.warn('No se encontraron elementos con la clase .slider-item');
    }
});

// Función para redirigir a shop.html
function irATienda() {
    console.log("Navegando a la tienda");
    window.location.href = '../paginas/shop.html';
}