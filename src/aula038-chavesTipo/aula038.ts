/*
  Podemos repassar o tio das chaves de um determinado tipo pra outro tipo
*/

type Veiculo = {
  marca: string;
  ano: number;
};

type Car = {
  brand: Veiculo['marca'];
  year: Veiculo['ano'];
  name: string;
};

const carro: Car = {
  brand: 'Ferrari',
  year: 2023,
  name: 'Carro legal',
};

console.log(carro);
