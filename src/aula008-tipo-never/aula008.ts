/*
 Representa que a função nunca irá retornar nada,pois se retorna quebra a applicação
*/

function createError(): never {
  throw new Error('Qualuer erro');
}

createError();
