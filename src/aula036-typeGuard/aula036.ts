/*
  Quando temos uma função que pode retorna dois tipos diferentes temos que verificar qual tipo que é antes do retorno, podemos fazer isso vendo o tipo diretamente, vendo se a propriedade existe e verificando o tipo da instancia dele
*/

export function add(a: unknown, b: unknown): number | string {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(1, 5);
console.log('a', 'b');

type Pessoa = { nome: string };
type Animal = { cor: string };

type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  constructor(public nome: string) {}
}

function mostraNome(obj: PessoaOuAnimal): void {
  //if ('nome' in obj) console.log(obj.nome);
  if (obj instanceof Aluno) console.log(obj.nome);
}

const aluno1 = new Aluno('Raphael');

mostraNome(aluno1);
