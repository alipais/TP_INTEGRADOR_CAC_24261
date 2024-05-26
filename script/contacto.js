function validarFormulario(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    const nombre = document.querySelector('input[name="fullname"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const telefono = document.querySelector('input[name="phone"]').value;
    const asunto = document.querySelector('input[name="affair"]').value;
    const mensaje = document.querySelector('textarea[name="message"]').value;

    console.log('Nombre y Apellido:', nombre);
    console.log('Correo Electrónico:', email);
    console.log('Teléfono:', telefono);
    console.log('Asunto del mensaje:', asunto);
    console.log('Mensaje:', mensaje);

    let errores = [];

    // Validar nombre y apellido
    if (nombre.trim() === '') {
        errores.push('Por favor, ingrese su nombre y apellido.');
    }

    // Validar correo electrónico
    if (email.trim() === '' || !isValidEmail(email.trim())) {
        errores.push('Por favor, ingrese un correo electrónico válido.');
    }

    // Validar teléfono
    if (telefono.trim() === '') {
        errores.push('Por favor, ingrese su número de teléfono.');
    }

    // Validar asunto
    if (asunto.trim() === '') {
        errores.push('Por favor, ingrese el asunto del mensaje.');
    }

    // Validar mensaje
    if (mensaje.trim() === '') {
        errores.push('Por favor, ingrese un mensaje.');
    }

    if (errores.length > 0) {
        alert(errores.join('\n')); // Mostrar mensajes de error
    } else {
        // Si no hay errores, enviar el formulario
        document.querySelector('form').submit();
    }
}

// Función para validar un correo electrónico
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Agregar el evento de submit al formulario
document.querySelector('form').addEventListener('submit', validarFormulario);

