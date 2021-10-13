let inss;
let ir;
let salarioBruto = 4000;

if (salarioBruto <= 1556.94) {
  inss = salarioBruto * 0.08;
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
  inss = salarioBruto * 0.09;
} else if (salarioBruto > 2594.93 && salarioBruto <= 5189,82) {
  inss = salarioBruto * 0.11;
} else {
  inss = 570.88
}
let salarioBase = salarioBruto - inss;

if (salarioBase <= 1903.98) {
  ir = 0;
} else if (salarioBase <= 2826.65) {
  ir = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05) {
  ir = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68) {
  ir = (salarioBase * 0.225) - 636.13;
} else {
  ir = (salarioBase * 0.275) - 869.36
}
let salarioLiquido = salarioBase - ir;
console.log(salarioLiquido);