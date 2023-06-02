interface PessoaProtocolo1<T, U> {
  nome: T;
  sobrenome: T;
  idade: U;
}

interface PessoaProtocolo2<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

type PessoaProtocolo3<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

const aluno1: PessoaProtocolo1<string, number> = {
  nome: 'Raphael Lima',
  sobrenome: 'Lima',
  idade: 24,
};

const aluno2: PessoaProtocolo2 = {
  nome: 'Raphael Lima',
  sobrenome: 'Lima',
  idade: 24,
};

const aluno3: PessoaProtocolo3 = {
  nome: 'Raphael Lima',
  sobrenome: 'Lima',
  idade: 24,
};

console.log(aluno1);
console.log(aluno2);
console.log(aluno3);
