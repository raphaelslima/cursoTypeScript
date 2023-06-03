/* eslint-disable @typescript-eslint/no-namespace */

/*
  Usado para criar um escopo e organizar código e reutilizar esse código.

  Tudo dentro do namespace é executado.

  O código criado dentro do namespace só existe dentro dele, a menos que vc exporte o que tem dentro dele.
*/

namespace MeuNameSpace {
  export const nome = 'raka';

  export class PessoaNameSpace {
    constructor(public name: string) {}
  }
}

const pNameSpace = new MeuNameSpace.PessoaNameSpace('Raphael');

console.log(pNameSpace);
