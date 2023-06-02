/*
  Overload: Faz com que baseado nos parametos que a função recebe ela se comporta d forma diferente.
*/

type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...args: number[]): number;
};

const adder: Adder = (x: number, y?: number, ...args: number[]): number => {
  if (args.length > 0)
    return args.reduce((acc, value) => acc + value) + x + (y || 0);
  return x + (y || 0);
};

console.log(adder(1));
console.log(adder(1, 2));
console.log(adder(1, 2, 5));
