/* decoradors modifica o comportamento ou substitui seu objeto.É uma função que é chamada em um determinado momento do código*/

@decorator
export class Animal {
  constructor(public name: string, public cor: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
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

const animal = new Animal('Raphael', 'Vermelho');
console.log(animal);
