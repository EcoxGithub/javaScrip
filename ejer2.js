var celsius;
var fahrenheit;

function ejer2() {
    var fahrenheit = prompt("Ingresa una temperatura en grados Fahrenheit:");
  
    var celsius = (fahrenheit - 32) * 5/9;
  
    alert("La temperatura en grados Celsius es: " + celsius.toFixed(2));
  }
  