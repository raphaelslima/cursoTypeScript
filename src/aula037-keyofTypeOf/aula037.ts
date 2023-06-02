/*
  Quando temos um objeto podemos usar eu tipo em uma função com o typeof

  Também podemos atrelar as chaves de um objeto em uma função ouvariavel com a palavra keyof
*/

type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj;

const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
};

function selecionaCor(cor: CoresChaves, cores: CoresObj) {
  return cores[cor];
}

console.log(selecionaCor('azul', coresObj));
