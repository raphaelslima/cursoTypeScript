/*
 Uma classe (mãe) que é extendida para uma classe filha é chamada de super classe e a classe filha de sub classe.

 Podemos usar os metodos e atributos da classe super na classe sub por meio do objeto super.

 Podemos chamar os atributos da super classe para a sub classe pelo constructor.
*/
export class Pessoa {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getNome(): string {
    return this.nome;
  }

  getSobrenome(): string {
    return this.sobrenome;
  }

  getCpf(): string {
    return this.cpf;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }

  getNome(): string {
    return super.getNome();
  }

  getSobrenome(): string {
    const result = super.getSobrenome();
    return result + ' HEYYYYYYY';
  }
}

const pessoa1 = new Aluno('Raphael', 'Lima', 23, '12345789', '123');

console.log(pessoa1.getNome());
console.log(pessoa1.getSobrenome());
console.log(pessoa1);
