// Obtén el elemento del sprite
var sprite = document.querySelector('.spriteMovimiento');
var computedStyle = window.getComputedStyle(sprite);
var backgroundPosition = computedStyle.getPropertyValue('background-position');
var [xPos, yPos] = backgroundPosition.split(' ');

// Establece la posición inicial del sprite
var xPos = 0;
var yPos = 0;
var ximg = 0;
var yimg = 0;

// Función para mover el sprite dentro de sí mismo
function moverSprite(x, y , ximg, yimg) {
  // Actualiza las coordenadas del sprite
  xPos += x;
  yPos += y;

  // Aplica la transformación de movimiento al sprite
  sprite.style.transform = `translate(${xPos}px, ${yPos}px)`;

}

// Función para manejar el evento de tecla presionada
function manejarTeclaPresionada(event) {
  // Comprueba qué tecla se presionó
  switch (event.key) {
    case 'ArrowLeft':
      moverSprite(-10, 0 ); // Mueve el sprite 10 píxeles a la izquierda
      sprite.style.animation = `mover-sprite-izquierda 1s steps(3) infinite`;
      break;
    case 'ArrowUp':
      moverSprite(0, -10); // Mueve el sprite 10 píxeles hacia arriba
      sprite.style.animation = `mover-sprite-arriba 1s steps(3) infinite`;
      break;
    case 'ArrowRight':
      moverSprite(10, 0 ); // Mueve el sprite 10 píxeles a la derecha
      sprite.style.animation = `mover-sprite-derecha 1s steps(3) infinite`;
      break;
    case 'ArrowDown':
      moverSprite(0, 10 ); // Mueve el sprite 10 píxeles hacia abajo
      sprite.style.animation = `mover-sprite-abajo 1s steps(3) infinite`;
      break;
  }
}

// Agrega un event listener para el evento 'keydown'
document.addEventListener('keydown', manejarTeclaPresionada);

