function decorator(
  classProperty: any,
  nomeMetodo: string,
  descriptor: PropertyDescriptor,
): any {
  console.log(classProperty);
  console.log(nomeMetodo);
  console.log(descriptor);
  return {
    value: function (...args: string[]) {
      return args[0].toLocaleUpperCase();
    },
  };
}

export class UmaPessoa {
  public nome: string;
  public sobrenome: string;
  public idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  @decorator
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

console.log(pessoa.metodo('EI'));
