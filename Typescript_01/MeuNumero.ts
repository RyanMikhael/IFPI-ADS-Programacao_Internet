class MeuNumero{
    readonly numero: number;

    constructor (numero: number){

        this.numero = numero;
    }

    getInteiro(){
        let inteiro: number = Math.floor(this.numero);
        return inteiro;
    }

    getDecimal(){
        let decimal: number = this.numero - this.getInteiro();
        return decimal;
    }

}

let num = new MeuNumero(4.15);

console.log("A parte inteira do numero é ", + num.getInteiro());

console.log("A parte decimal do numero é aproximadamente ", + num.getDecimal().toFixed(2));
