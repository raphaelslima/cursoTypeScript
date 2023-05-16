export class Empresa {
  // Podes que definir as propriedade e metodos no inicio da clase ou passar no contructor
  public readonly nome: string;

  /*
  Podemos inicializar a propriedade ou o metódo no momento da sua declaração ao invés de esperar o constructor.
  */
  public readonly colaboradores: Colaborador[] = [];

  // Quando não se fala se o atributo é public, private ou protract o atributo é public
  readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  addColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Upflow', '123456');
const colaborador1 = new Colaborador('Raphael', 'Lima');
const colaborador2 = new Colaborador('Raka', 'Oliveira');

empresa1.addColaborador(colaborador1);
empresa1.addColaborador(colaborador2);

console.log(empresa1);
