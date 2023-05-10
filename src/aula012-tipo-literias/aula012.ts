/*
  Utilizado para travar a opção de valore para uma var, parâmetro, propriedade...
  Por meio da passagem de um subtipo de um tipo pai, exemplo: number, string...
*/

function selectCorHere(cor: 'VERMELHO' | 'AZUL' | 'VERDE'): void {
  console.log(cor);
}

selectCorHere('VERMELHO');
