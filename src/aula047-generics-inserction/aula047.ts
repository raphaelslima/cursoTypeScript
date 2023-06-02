export function unirObjetos<O1, O2>(object1: O1, object2: O2): O1 & O2 {
  //return { ...object1, ...object2 };
  return Object.assign({}, object1, object2);
}

const obj1 = {
  chave1: 'valor1',
};

const obj2 = {
  chave2: 'valor2',
};

const uniao = unirObjetos(obj1, obj2);

console.log(uniao);
