class debitoConta{
    debitar(valor: number, id: number): void{       
    }
    numeroDeTransaçao: string
    formatarTransaçao(): string {
        return this.numeroDeTransaçao
    }
}

class debitoContaCorrente implements debitoConta{
    debitar(valor, id){
        // verifica tipo de conta
        // debita da conta corrente
    }
    numeroDeTransaçao: string
    formatarTransaçao(){
        return this.numeroDeTransaçao
    }

}

class debitoContaInvestimento implements debitoConta{
    debitar(valor, id){
        // verifica tipo de conta
        // debita da conta investimento
    }
    numeroDeTransaçao: string
    formatarTransaçao(){
        return this.numeroDeTransaçao
    }

}

class debitoContaPoupança implements debitoConta{
    debitar(valor, id){
        // faz validaçao
        // debita da conta poupança
    }
    numeroDeTransaçao: string
    formatarTransaçao(){
        return this.numeroDeTransaçao
    }

}
