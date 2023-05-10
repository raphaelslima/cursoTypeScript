// função o u metodo não retorna nada

function voidReturn(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  name: 'Raphael',
  sobrenome: 'Lima',
  showName(): void {
    console.log(this.name + ' ' + this.sobrenome);
  },
};

voidReturn('Raphael', 'Lima');
pessoa.showName();

// Para reutilizar uma variavel da aplicação localemnte devemos exportala
export { pessoa };
