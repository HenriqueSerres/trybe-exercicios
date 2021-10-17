let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorPalavra(nomes) {
  let maiorPalavra = nomes[0];

  for (let key in nomes){
   if (nomes[key].length > maiorPalavra.length){
     maiorPalavra = nomes[key];
   }
  }
  return maiorPalavra;

}
console.log(maiorPalavra(nomes));