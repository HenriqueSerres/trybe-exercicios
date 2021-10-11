const anguloA = -45;
const anguloB = -45;
const anguloC = -90;
if (anguloA + anguloB + anguloC == 180) {
  console.log ("true");
} else if (anguloA + anguloB + anguloC != 180) {
  console.log ("false");
} else if (anguloA < 0 && anguloB < 0 && anguloC < 0) {
  console.log ("fail");
} else {
  console.log ("é um quadrado");
}