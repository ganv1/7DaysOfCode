function submitForm() {
    // Obtener los valores de los campos del formulario
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const language = document.getElementById('language').value;

    // Obtener el elemento donde se mostrará el resultado
    const resultDiv = document.getElementById('result');

    // Mostrar el mensaje inicial
    resultDiv.innerHTML = `Hola ${name}, tienes ${age} años y estás aprendiendo ${language}.<br>
                           ¿Te gusta estudiar ${language}? Responde con 1 para (SÍ) o 2 para (NO).`;

    // Crear un campo de entrada para la respuesta del usuario
    const input = document.createElement('input');
    input.type = 'number';
    input.id = 'response';
    //ingresar  = '1 o 2';

    // Crear un botón para enviar la respuesta
    const button = document.createElement('button');
    button.textContent = 'Enviar respuesta';
    button.onclick = function () {
        handleResponse(language);
    };

    // Agregar el campo de entrada y el botón al resultado
    resultDiv.appendChild(document.createElement('br')); // Salto de línea
    resultDiv.appendChild(input);
    resultDiv.appendChild(button);
}

function handleResponse(language) {
    // Obtener la respuesta del usuario
    const response = document.getElementById('response').value;
    const resultDiv = document.getElementById('result');

    // Mostrar un mensaje dependiendo de la respuesta
    if (response == 1) {
        resultDiv.innerHTML += `<br>¡Muy bien! Sigue estudiando ${language} y tendrás mucho éxito.`;
    } else if (response == 2) {
        resultDiv.innerHTML += `<br>Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?`;
    } else {
        resultDiv.innerHTML += `<br> Por favor, solo ingresa 1 para SÍ o 2 para NO.`;
    }
}