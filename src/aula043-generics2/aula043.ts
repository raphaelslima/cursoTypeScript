const arrayNumbers: number[] = [0, 1, 2];

async function promiseAsinc() {
  return 1;
}

promiseAsinc().then((res) => console.log(res + 1));
