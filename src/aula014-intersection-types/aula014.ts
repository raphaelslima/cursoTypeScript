/*
  1) & (AND) -> Podemos combinar tipos e criar um novo tipo e todos os campos dos obj passados tem que ter no novo obj.

  2) Também podemos pegar a intereceção entre os dois tipo criados
*/

type hasName = {
  name: string;
  profession: string;
};

type hasLastName = {
  lastName: string;
};

type hasAge = {
  age: number;
};

type person = hasName & hasLastName & hasAge;

const p1: person = {
  name: 'raphael',
  profession: 'prog',
  lastName: 'Lima',
  age: 23,
};

type a = 'A' | 'B';
type b = 'A' | 'C';

type c = a & b;
