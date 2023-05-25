/*
  Associação: Uma classe pode ser usada por outra classe, porém sem nenhuma relação de obrigatoriedade, literalemnte uma classe chama a outra
*/

export class Escritor {
  private _ferramenta: Ferramenta | null = null;

  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  escrever(): void {
    if (this.ferramenta === null) {
      console.log('Escritor sem ferramenta');
      return;
    }
    this.ferramenta.escrever();
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}
  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo`);
  }
}

export class MaqunadeEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está digitando`);
  }
}

const escritor1 = new Escritor('Raphael Lima');
const caneta = new Caneta('Caneta');
const maqunadeEscrever = new MaqunadeEscrever('MaqunadeEscrever');

escritor1.escrever();

console.log(escritor1.nome);
console.log(caneta.nome);
console.log(maqunadeEscrever.nome);

escritor1.ferramenta = caneta;

escritor1.escrever();
