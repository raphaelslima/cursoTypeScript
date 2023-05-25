/*
  Uma classe tem uma relaão primordial com outra, sendo uma classe o principal o que faz ela funcionar. Exemplo: Ser humano e coração
*/

export class Carro {
  private readonly motor = new Motor();

  carroligou(): void {
    this.motor.ligar();
  }

  carrodeligou(): void {
    this.motor.desligar();
  }
}

export class Motor {
  ligar(): void {
    console.log('Motor Ligou');
  }

  desligar(): void {
    console.log('Motor desligou');
  }

  acelerar(): void {
    console.log('Motor acelerou');
  }

  parou(): void {
    console.log('Motor parou');
  }
}

const carro = new Carro();
carro.carroligou();
