let numeros = [2, 3, 2, 8, 8, 8, 8, 5, 8, 2, 3]; 

function maisRepete(numeros) {
  let contRepet = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  for (let index in numeros){
    let comparaNumero = numeros[index];
    for (let index2 in numeros){
      if (comparaNumero === numeros[index2]) {
        contNumero +=1;
      }
    }
    if (contNumero > contRepet){
      contRepet = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }
  return numeros[indexNumeroRepetido];
}
console.log(maisRepete(numeros));