/*
  ?? Operador usado para verficar se o lado esquerdo da operações existe e se existir executa o lado direito. Obs: falso não entra

  ? se exsitir vai retornar a operação encadeada
*/

type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'titulo',
  texto: 'texto',
  //data: new Date(),
};

console.log(
  documento.data?.toDateString() ??
    'Isso só rola para null e undefined do lado esquerdo',
);
