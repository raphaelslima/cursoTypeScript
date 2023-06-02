/*
  Quando tem a declaração de duas interfaces com o mesmo nome elas se unem e formam um merge
*/

interface Pessoa {
  nome: string;
}

interface Pessoa {
  sobrenome: string;
}

interface Pessoa {
  readonly idade?: number;
}

const pe1: Pessoa = {
  nome: 'Raphael',
  sobrenome: 'Lima',
  idade: 24,
};

console.log(pe1);
