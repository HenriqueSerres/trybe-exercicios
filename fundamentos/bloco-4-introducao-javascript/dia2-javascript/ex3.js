let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaNumbers = 0;
let mediaNumbers = 0;

 for (let index = 0; index < numbers.length; index += 1) {
   somaNumbers += numbers[index];
 }
 mediaNumbers = somaNumbers / numbers.length;
 console.log(mediaNumbers);
 