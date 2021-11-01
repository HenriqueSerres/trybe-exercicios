function creatStateOptions(){
  let states = document.getElementById('state');
  let statesOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
   
  for (let index = 0; index < statesOptions.length; index += 1) {
    let options = document.createElement('option');
    options.innerText = statesOptions[index];
    options.value = statesOptions[index];
    states.appendChild(options);
    
  }
}
creatStateOptions();