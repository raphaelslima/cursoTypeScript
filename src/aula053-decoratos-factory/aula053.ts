function inverteNomeECor(param1: string, param2: string) {
  return function <T extends new (...args: any[]) => any>(target: T): T {
    return class extends target {
      cor: string;
      nome: string;

      constructor(...args: any[]) {
        super(...args);
        this.nome = this.inverte(args[0]) + ' ' + param1;
        this.cor = this.inverte(args[1]) + ' ' + param2;
      }

      inverte(value: string): string {
        return value.split('').reverse().join('');
      }
    };
  };
}

@inverteNomeECor('valor 1', 'valor 2')
export class Animal {
  constructor(public name: string, public cor: string) {}
}

const animal = new Animal('Raphael', 'Vermelho');
console.log(animal);
