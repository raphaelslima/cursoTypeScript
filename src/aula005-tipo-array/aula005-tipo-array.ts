/*
Podemos criar array de duas formas:
  1) Array<T>
  2) T[]
 */

export function multipleNumber(...args: number[]): number {
  return args.reduce((ac, value) => ac * value, 1);
}

const result = multipleNumber(1, 2, 3);

console.log(result);
