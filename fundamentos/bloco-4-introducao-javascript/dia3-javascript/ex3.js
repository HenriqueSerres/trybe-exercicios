let trianguloRet = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = trianguloRet;

for (let index = 0; index < trianguloRet; index +=1){
  for (let index2 = 0; index2 <= trianguloRet; index2 +=1){
    if (index2 < inputPosition) {
      inputLine = inputLine + ' ';

    } else {
      inputLine = inputLine + symbol;
    }

}
console.log(inputLine);
inputLine = '';
inputPosition -= 1;
};