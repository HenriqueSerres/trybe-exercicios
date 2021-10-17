let inteiros = [200, 3, 6, 700, 10, 100]; 
function maiorIndice(inteiros){
  let test = 0;

  for (let key in inteiros) {
    if (inteiros[test] < inteiros[key]){
      test = key;
    }      
  }
  return test;
}
console.log(maiorIndice(inteiros));