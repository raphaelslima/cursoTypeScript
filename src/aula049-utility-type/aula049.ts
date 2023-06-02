// tipos genericos do typeScript

// Record: representa um usuário que vc fala o tipo da chave e o tipo dos valores

const objRecord: Record<string, string | number> = {
  nome: 'Raphael',
  sobrenome: 'Lima',
  idade: 30,
};

console.log(objRecord);

// required: tudo dentro do type, interface e etc se torna obrigatorio.

type pessoaProtocol1 = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

type pessoaProtocol2 = Required<pessoaProtocol1>;

const objReq: pessoaProtocol2 = {
  nome: 'Raphael',
  sobrenome: 'Lima',
  idade: 30,
};

console.log(objReq);

// Partial: transforma tudo em opcional

type pessoaProtocol3 = Partial<pessoaProtocol2>;

const objPartial: pessoaProtocol3 = {
  nome: 'Raphael',
  sobrenome: 'Lima',
  idade: 30,
};

console.log(objPartial);

// readOnly

type pessoaProtocol4 = Readonly<pessoaProtocol3>;

const objReadonly: pessoaProtocol4 = {
  nome: 'Raphael',
  sobrenome: 'Lima',
  idade: 30,
};

console.log(objReadonly);

// Pick: Faz com que vc escolha as chaves do type que vc deseja levar para outro tyoe

type pessoaPick = Pick<pessoaProtocol2, 'nome' | 'sobrenome'>;

const objPick: pessoaPick = {
  nome: 'Raphael',
  sobrenome: 'Lima',
};

console.log(objPick);

/* Extract: Computa os tipos que estão nos dois types e Exclude: Computa todos os tipos que estão no primeiro type e que não está no segundo type */

type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

type tipoExclude = Exclude<ABC, CDE>;
type tipoExtract = Extract<ABC, CDE>;

export default 1;
