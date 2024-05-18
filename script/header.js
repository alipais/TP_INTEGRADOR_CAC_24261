document.addEventListener('DOMContentLoaded', function () {
    fetch('../template/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            // Re-attach event listeners if necessary
            setupMenuToggle();
        })
        .catch(error => console.error('Error loading header:', error));
});

function setupMenuToggle() {
    const menuToggle = document.getElementById('menu-toggle');
    const menuDesplegado = document.getElementById('menu-desplegado');

    menuToggle.addEventListener('click', function () {
        const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
        menuToggle.setAttribute('aria-expanded', !expanded);
        menuDesplegado.classList.toggle('menu-cerrado');
        menuDesplegado.classList.toggle('menu-abierto');
    });
}
