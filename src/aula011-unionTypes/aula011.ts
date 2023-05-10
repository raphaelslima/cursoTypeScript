/*
 Indica que o retorno de uma função ou var pode ter mais de um tipo
*/

function addOrConcat(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return `${a}${b}`;
  }
}

console.log(addOrConcat(10, 20));
console.log(addOrConcat('10', '20'));
