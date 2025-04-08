// Seleccionamos los botones del HTML y el elemento donde se muestra el contador
let textCounter = document.querySelector('.text-counter');
const btnIncrease = document.getElementById('increaseBtn');
const btnDecrease = document.getElementById('decreaseBtn');
const btnReset = document.getElementById('resetBtn');

// Variable que representa el valor numérico actual del contador
let textContentBackend = 0;

// Función que actualiza el contador en pantalla y en consola
function updateCounter(value) {
    textContentBackend += value;
    textCounter.textContent = textContentBackend;
    changeColorCounter();
}

// Esta función le añade los eventos necesarios al botón que se pasa como argumento
// value puede ser +1 (para aumentar) o -1 (para disminuir)
function holdButton(button, value) {
    let intervalId;

    // Este evento se activa al presionar el botón y mantiene un intervalo que actualiza el contador
    button.addEventListener('mousedown', () => {
        updateCounter(value); // Se actualiza una vez al iniciar
        intervalId = setInterval(() => {
            updateCounter(value); // Se actualiza cada 100ms mientras se mantiene presionado
        }, 100);
    });

    // Estos eventos detienen el intervalo cuando se suelta el botón o el mouse sale del botón
    button.addEventListener('mouseup', () => {
        clearInterval(intervalId);
    });
    button.addEventListener('mouseleave', () => {
        clearInterval(intervalId);
    });
}

function changeColorCounter(){
    if (textContentBackend > 0) {
        textCounter.style.color = "green";
    } else if (textContentBackend < 0) {
        textCounter.style.color = "lightcoral";
    } else {
        textCounter.style.color = "#222"; // color neutro para cero
    }
}

// Llamamos a la función para cada botón, aplicando la lógica de incremento o decremento
holdButton(btnIncrease, 1);  // Botón para aumentar
holdButton(btnDecrease, -1); // Botón para disminuir

// Botón de reset tradicional, solo se ejecuta una vez al hacer click
btnReset.addEventListener('click', () => {
    textContentBackend = 0;
    textCounter.textContent = textContentBackend;
    changeColorCounter();
});