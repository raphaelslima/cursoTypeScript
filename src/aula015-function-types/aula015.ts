// Modo de criar um type e tipar uma função.

type mapStringCallBack = (item: string) => string;

export function mapString(
  array: string[],
  callbackFunction: mapStringCallBack,
): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackFunction(array[i]));
  }

  return newArray;
}

const array: string[] = ['a', 'b', 'c'];

const abcMapped = mapString(array, (item: string) => {
  return item.toUpperCase();
});

console.log(abcMapped);
