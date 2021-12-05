class debitoConta{
    debitar(valor: number, id: number, tipo: tipoConta){
        if (tipo == tipoConta.contaCorrente){
            // debita
        }

        if (tipo == tipoConta.contaPoupança){
            // realiza validaçao 
            // debita
        }
    }
}

enum tipoConta{
    contaCorrente,
    contaPoupança

}
