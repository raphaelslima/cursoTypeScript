/* eslint-disable */

// tipos do ts

// basic types
let nome: string = 'Raphael';
let idade: number = 23;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer simbolo');
//let big: bigint = 10n;

// array

let numberArray: Array<number> = [1, 2, 3, 4, 5];
let stringArray: string[] = ['oi', 'tudo', 'bem?'];

// Objs

let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  nome: 'Raphael',
  idade: 23,
};

// function

function sum(x: number, y: number): number {
  return x + y;
}

const res = sum(1, 2);
