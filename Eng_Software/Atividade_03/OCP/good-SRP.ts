interface debitoConta{
    debitar(valor: number, id: number): void
    numeroDeTransaçao: string
    formatarTransaçao(): string
}

class debitoContaCorrente implements debitoConta{
    debitar(valor, id){
        // debita da conta corrente
    }
    numeroDeTransaçao: string
    formatarTransaçao(){
        return this.numeroDeTransaçao
    }

}

class debitoContaInvestimento implements debitoConta{
    debitar(valor, id){
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
