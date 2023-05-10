/*
Tipagem de dados aplicavel para arrays que não são mais escalaveis,
onde se define os tipos de todos os elementos do array.
*/

// ...t[] -> O restante do array vai ser desse tipo, mas não é obg.

const tupleArray1: [number, string, string?] = [1, 'oi'];
const tupleArray2: readonly [number, string, string?] = [1, 'oi'];
const tupleArray3: [number, string, ...number[]] = [1, 'oi', 1, 50];

console.log(tupleArray1);
console.log(tupleArray2);
console.log(tupleArray3);
