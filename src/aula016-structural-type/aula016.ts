/*
  TypeScript está comente preocupado com o conteúdo/regras das chaves e não com a identidade/estrutura do obj
*/

type verifyUser = (user: User, sentValue: User) => boolean;
type User = {
  name: string;
  password: string;
};

const verifyLog: verifyUser = (user, sentValue) => {
  return user.name === sentValue.name && user.password === sentValue.password;
};

const bdUser: User = {
  name: 'Raphael',
  password: '123456',
};

const sentUser = {
  name: 'Raphael',
  password: '123456',
  permission: '',
};

const loggUser = verifyLog(bdUser, sentUser);

console.log(loggUser);
