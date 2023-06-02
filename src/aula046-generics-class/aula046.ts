export class Pessoa1<T, U> {
  constructor(public nome: T, public idade: U) {}
}

const pessoa1 = new Pessoa1('Raphael', 24);
const pessoa2 = new Pessoa1<string, number>('Raphael', 24);

console.log(pessoa1);
console.log(pessoa2);

export class Pilha<T> {
  private contator = 0;
  private elemento: { [keyof: number]: T } = {};

  push(elemento: T): void {
    this.elemento[this.contator] = elemento;
    this.contator++;
  }

  isEmpty(): boolean {
    return this.contator === 0;
  }

  pop(): T | void {
    if (this.isEmpty()) {
      const elemento = this.elemento[this.contator];
      delete this.elemento[this.contator];
      this.contator--;
      return elemento;
    } else {
      console.log('Pilha está vazia');
      return undefined;
    }
  }

  tamanho(): number {
    return this.contator;
  }

  show(): void {
    for (const chave in this.elemento) {
      console.log(this.elemento[chave]);
    }
  }
}

const pilha = new Pilha<number>();

pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
pilha.show();
