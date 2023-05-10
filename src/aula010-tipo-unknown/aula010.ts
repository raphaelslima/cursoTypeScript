/*
  Um any, porém anres de vc manipular ele, vc têm que fazer alguma verificação no tipo
*/

const x: unknown = 10;

if (typeof x === 'number') {
  console.log(x + 20);
}
