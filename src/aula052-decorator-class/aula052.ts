function inverteNomeECor<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    cor: string;
    nome: string;

    constructor(...args: any[]) {
      super(...args);
      this.nome = this.inverte(args[0]);
      this.cor = this.inverte(args[1]);
    }

    inverte(value: string): string {
      return value.split('').reverse().join('');
    }
  };
}

@inverteNomeECor
export class Animal {
  constructor(public name: string, public cor: string) {}
}

const animal = new Animal('Raphael', 'Vermelho');
console.log(animal);
