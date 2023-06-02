export class Calculadora {
  constructor(public numero: number) {}

  add(n: number) {
    this.numero += n;
    return this;
  }

  sub(n: number) {
    this.numero -= n;
    return this;
  }

  mult(n: number) {
    this.numero *= n;
    return this;
  }

  div(n: number) {
    this.numero /= n;
    return this;
  }
}

export class SubCalc extends Calculadora {
  pow(n: number): this {
    this.numero **= n;
    return this;
  }
}

const calculadora = new SubCalc(10);

console.log(calculadora.add(5).mult(2).pow(2));
