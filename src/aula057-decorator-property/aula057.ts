function decorator(classProperty: any, nome: string): any {
  console.log(classProperty);
  console.log(nome);
  let valorPropriedade: string;
  return {
    get: () => {
      return valorPropriedade;
    },
    set: (valor: string) => {
      valorPropriedade = valor;
    },
  };
}

export class UmaPessoa {
  @decorator
  public nome: string;
  public sobrenome: string;
  public idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  metodo(msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  get nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }
}

const pessoa = new UmaPessoa('Raphael', 'Lima', 24);

console.log(pessoa.metodo('Olá mundo!'));

pessoa.nomeCompleto = 'Teste 1';

console.log(pessoa.nomeCompleto);
