// any representa que pode ser qualquer tipo.

function showMessage(msg: any) {
  return msg;
}

console.log(showMessage(1));
console.log(showMessage('Olá'));
console.log(showMessage([1, 2, 3]));
