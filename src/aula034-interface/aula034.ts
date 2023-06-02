/*
  Usada para modelar um objeto, podemos também extender varia interfaces usando recursos de outras interfaces.
*/

interface TipoNome {
  nome: string;
}

interface tipoSobrenome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomeCompleto(): string;
}

//type TipoPessoa = TipoNome & tipoSobrenome & TipoNomeCompleto;
interface TipoPessoa2 extends TipoNome, tipoSobrenome, TipoNomeCompleto {}

export class Pessoa implements TipoPessoa2 {
  constructor(public nome: string, public sobrenome: string) {}

  public nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa1 = new Pessoa('Raphael', 'Lima');
console.log(pessoa1.nomeCompleto());
