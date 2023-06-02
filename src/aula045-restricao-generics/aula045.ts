type obterChave = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: obterChave = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'rosa',
  vacina: ['vac1', 'vac2'],
};

const vacina = obterChave(animal, 'vacina');

console.log(vacina);
