/*
  Metodo estatico é um metodo ou um atributo que pode ser acessado sem instancia, mas pela classe.
*/
export class Pessoa {
  static cpfPadrao = '123456';

  constructor(
    public name: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getNomeCompleto(): string {
    return this.name + ' ' + this.sobrenome;
  }

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  static falaOi(): void {
    console.log('oi');
  }
}

const pessoa = new Pessoa('Raphael', 'Lima', 24, '123456');

console.log(Pessoa.cpfPadrao);

Pessoa.falaOi();
