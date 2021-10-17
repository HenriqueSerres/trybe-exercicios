let palindrom = 'rato';

function checkpalindrom(palindrom) {
  let reverse = palindrom.split('').reverse().join('');
  if (palindrom === reverse){
    console.log(true);
  } else {
    console.log(false);
  }

}
console.log(checkpalindrom(palindrom));