let base = 5;
let symbol = '*';
let inputLine = '';
let midOfPiramide = (base + 1) / 2;
let controlRight = midOfPiramide;
let controlLeft = midOfPiramide;

for (let index = 0; index <= midOfPiramide; index +=1){
  for (let index2 = 0; index2 <= base; index2 += 1){
    if (index2 > controlLeft && index2 < controlRight) {
      inputLine = inputLine + symbol;
    }else{
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  controlRight += 1;
  controlLeft -= 1;
}