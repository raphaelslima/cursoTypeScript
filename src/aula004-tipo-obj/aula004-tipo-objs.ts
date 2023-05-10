// Topagem de obj
/* Quando não sabemos todas as chaves que iremos criar no obj podemos na tipagem,
  passar o [key: tipo]: unknown para poder definir varias chaves de um determinado tipo.
*/

// readonly propriedade do obj não pode ser alterada

const objA: {
  readonly chaveA: string;
  chaveB: number;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'teste',
  chaveB: 123,
};

console.log(objA.chaveA);

objA.chaveC = 'chavec';
console.log(objA.chaveC);

objA.chaveD = 'chaveD';
console.log(objA.chaveD);
