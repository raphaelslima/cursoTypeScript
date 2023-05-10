/*
 Apelido para um tipo, pordemos criar nosso proprio tipo, definindo tipos para cada propriedade
 de um obj.

 Por convenção sempre que criamos um type é cm letra maiscúla.
*/

type Person = {
  name: string;
  age?: number;
  adult: boolean;
  corPrefer?: CorPrefer;
};

type BasicCor = 'VERMELHO' | 'AZUL' | 'VERDE';
type OtherCor = 'PRETO' | 'CINZA';

type CorPrefer = BasicCor | OtherCor;

const raphael: Person = {
  name: 'Raphael',
  adult: true,
  corPrefer: 'PRETO',
};

console.log(raphael);
type Age = number;

const age: Age = 23;
console.log(age);
