class varejo{

    constructor(public nome: string, public totalVendas: number){}

    public calcularComissao(){
        var comissao: number;

        if (this.totalVendas <= 5000){
            comissao = 0;
        }
        else if(this.totalVendas > 5000 && this.totalVendas <= 10000){
            comissao = (this.totalVendas - 5000) * 0.05;
        }
        else if(this.totalVendas > 10000 && this.totalVendas <= 30000){
            comissao = ((10000-5000)*0.05) +  (this.totalVendas - 10000) * 0.10;
        }
        else if(this.totalVendas > 30000 ){
            comissao = 0.20 * this.totalVendas;
        }

        return comissao;

    }

    
    public calcularSalario() {
        var salario: number;
        var commission: number;
        commission = this.calcularComissao();
        salario = 1100;
        salario = salario + commission

        return salario;

    }
    
}

let salario = new varejo('Ryan', 28000);

console.log('O vendedor', salario.nome + ' fez um total de vendas de', salario.totalVendas +
'R$, obteve uma comissão de', salario.calcularComissao() + 'R$ e um salário de ',+
salario.calcularSalario() + 'R$.');
