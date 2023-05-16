/*
  Podemos setar um valor fixo no construtr da sub classe no super.
  protec só é acessado pelas sub classes.
*/
export class Empresa {
  public readonly nome: string;
  public readonly colaboradores: Colaborador[] = [];
  readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  addColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }
}

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '123456789');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const colaborador1 = new Colaborador('Raphael', 'Lima');
const colaborador2 = new Colaborador('Raka', 'Oliveira');

const udemy1 = new Udemy();
udemy1.addColaborador(colaborador1);
udemy1.addColaborador(colaborador2);
udemy1.popColaborador();
console.log(udemy1);
