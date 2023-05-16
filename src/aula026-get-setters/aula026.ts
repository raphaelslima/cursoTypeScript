/*
   Get e set permite chamar e setar os dados de atributos privados, eles se comportam igual atributos da classe, o set é invocado quando colocamos o = e o get igual um atributo.
*/

export class Pessoa {
  constructor(
    public name: string,
    public sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {}

  getNomeCompleto(): string {
    return this.name + ' ' + this.sobrenome;
  }

  getIdade(): number {
    return this.idade;
  }

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  get cpf(): string {
    return this._cpf;
  }
}

const pessoa = new Pessoa('Raphael', 'Lima', 24, '123456');
pessoa.cpf = '654321';
console.log(pessoa.cpf);
