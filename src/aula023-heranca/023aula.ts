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

  getCpf(cpf: string): string {
    return cpf;
  }
}

export class Aluno extends Pessoa {
  getNome(): string {
    return 'Meu nome é ' + this.nome;
  }
}

const pessoa1 = new Aluno('Raphael', 'Lima', 23, '12345789');

console.log(pessoa1.getNome());
