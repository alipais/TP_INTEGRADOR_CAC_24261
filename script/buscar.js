// Captura el evento de envío del formulario de búsqueda
const searchForm = document.getElementById('search-form');
if (searchForm) {
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario de manera predeterminada
        clearSearchResults(); // Llama a una función para limpiar los resultados
    });
}

function clearSearchResults() {
    const resultsContainer = document.getElementById('results-container');
    if (resultsContainer) {
        resultsContainer.innerHTML = ''; // Limpiar resultados previos
    }
}
