const custo = 10;
const valorVenda = 25;

if (custo >= 0 && valorVenda >= 0) {
  const custoTotal = (custo * 1.2);
  const lucroVenda = (valorVenda - custoTotal) * 1000;
  console.log(lucroVenda)
} else {
  console.log("erro valor negativo")
}