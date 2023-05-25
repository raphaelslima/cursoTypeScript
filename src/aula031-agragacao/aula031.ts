/*
  Relação entre duas classes onde uma classe não funciona bem sem a outra. Exemplo: Carrinho de compras e produto
*/

export class CarrinhoDeProdutos {
  private readonly produtos: Produto[] = [];

  public inserirProduto(...produtos: Produto[]): void {
    produtos.forEach((produto) => {
      this.produtos.push(produto);
    });
  }

  public qtdProduto(): number {
    return this.produtos.length;
  }

  public total(): number {
    let total = 0;
    total = this.produtos.reduce((acc, produto) => acc + produto.preco, 0);
    return total;
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const fogao = new Produto('Fogao', 500);
const geladeira = new Produto('Geladeira', 1000);
const tv = new Produto('Tv', 800);

const carrinhoDeProdutos = new CarrinhoDeProdutos();
carrinhoDeProdutos.inserirProduto(fogao, geladeira, tv);

console.log(carrinhoDeProdutos);
console.log(carrinhoDeProdutos.qtdProduto());
console.log(carrinhoDeProdutos.total());
