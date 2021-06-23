class Transaçao{
    constructor(
        readonly valor: number,
        readonly desconto: number){}

    Desconto(){
        let value = this.valor;
        let discount = this.desconto;

        let resultado = value * (1- discount/100);
        return resultado;

    }

    get v(): number{
        return this.valor;

    }

    get d(): number{
        return this.desconto;

    }

}

let transaction = new Transaçao(100,10);

console.log("O valor com desconto é ", + transaction.Desconto());