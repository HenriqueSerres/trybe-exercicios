const pecaXadrez = "REI";
switch (pecaXadrez.toLowerCase()) {
  case "bispo": console.log("bispo->diagonais");
  break;
  case "cavalo": console.log("cavalo-> em L");
  break;
  case "rei": console.log("rei-> uma casa em qualquer direção");
  break;
  default: console.log("não é xadrez");
}