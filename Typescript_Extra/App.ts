class mediaCasos{
    
    constructor(private mediaHoje: number, private media14Dias: number){}
        
    public calculoVariaçao(){
        var variaçao: number;
        var maior : number;
        var menor : number;

        if (this.mediaHoje > this.media14Dias){
            maior = this.mediaHoje;
            menor = this.media14Dias
        }
        else{
            maior = this.media14Dias;
            menor = this.mediaHoje;
        }

        variaçao = (maior - menor) * 100/ maior;
        return variaçao;

    }

    public classificaçao(){
        if (this.calculoVariaçao() > 15){
            return 'Em alta';
        }
        else if (this.calculoVariaçao() <- 15){
            return 'Em queda';
        } 
        else{
            return 'Em estabilidade';
        }
    }  
    
}

let comparaçao1 = new mediaCasos(49158, 74490);

console.log('A variação foi de ', comparaçao1.calculoVariaçao().toFixed(2));
console.log(comparaçao1.classificaçao())

