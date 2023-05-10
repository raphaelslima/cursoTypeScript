/*
  Usado para enumerar uma estrutura de dados.
*/

// Podemos dar merge de enum com os mesmos nomes
enum Cores {
  VERMELHO, // 0
  AZUL = 200,
  AMARELO,
}

enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

function selectCor(cor: Cores): void {
  console.log(Cores[cor]);
}

function selectCores(cor: Cores): void {
  console.log(cor);
}

selectCor(0);
selectCores(Cores.ROXO);

console.log(Cores.VERMELHO);
console.log(Cores[201]);
console.log(Cores.ROXO);
console.log(Cores);
