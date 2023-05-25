/*
  Conceito que faz com que a classe crie somente uma instancia e quando cria uma nova instancia, retorna a instancia que já existe.
*/

export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(
      `Coentactado com Host: ${this.host}, User: ${this.user} e Password: ${this.password}`,
    );
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) return Database.database;
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db1 = Database.getDatabase('localHost', 'root', '12345');

db1.connect();
