/*
  Garante que todas as classes que extendem essa classe tenham determinado metodo e que seja do tipo da classe mãe, mas não podemos inicializar mais a classe diretamente.

  E quando criamos um metodo abstract obrigamos a toda classe que extende dessa clase inicializar o metodo dentro dela
*/

export abstract class Personagem {
  protected abstract emoji: string;

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  perderVida(ataque: number): void {
    console.log(`${this.nome} está sendo atacado HP atual ${this.vida}`);
    this.vida -= ataque;
    console.log(`Depois do ataque HP: ${this.vida}`);
  }

  abstract bordao(): void;
}

export class Guerreiro extends Personagem {
  protected emoji = '\u{1F9DD}';

  bordao(): void {
    console.log(this.emoji + ' Guerreiro ao ataque!!!');
  }
}
export class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';

  bordao(): void {
    console.log(this.emoji + ' Monstro ao ataque!!!');
  }
}

const guerreiro = new Guerreiro('Kratos', 100, 1000);
const monstro = new Monstro('Bicho Papão', 80, 1000);

guerreiro.atacar(monstro);
monstro.atacar(guerreiro);
