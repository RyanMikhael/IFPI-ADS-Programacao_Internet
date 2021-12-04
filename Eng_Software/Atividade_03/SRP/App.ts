// Q 01:

/*
a) - Falso
b) - Falso
c) - Verdadeiro
d) - Falso
e) - Verdadeiro
f) - Verdadeiro
g) - Verdadeiro
h) - Verdadeiro
*/

// Q 02:

class triangulo{
    l1: number;
    l2: number;
    l3: number;

    ehTriangulo(l1: number, l2: number, l3: number): boolean {
        if ( Math.abs(l2-l3) < l1 && l1 < (l2 + l3) ) {
            return true
        }
        else{
            return false
        }
    }

    ehIsosceles(l1: number, l2: number, l3: number): boolean {
        if ( this.ehTriangulo(l1, l2, l3) ){
            if (!this.ehEquilatero(l1,l2,l3) ){
                if (l1 == l2 || l1 == l3 || l2 == l3) {
                    return true
                }
                else{
                    return false
                }
            }   
            else{
                return false
            }
        }
        else{
            return false
        }
    }

    ehEscaleno(l1: number, l2: number, l3: number): boolean {
        if ( this.ehTriangulo(l1, l2, l3) ){
            if (l1 != l2 && l2 != l3 && l1 != l3) {
                return true
            }
            else{
                return false
            }
        } 
        else{
            return false
        }
    }

    ehEquilatero(l1: number, l2: number, l3: number): boolean {
        if ( this.ehTriangulo(l1, l2, l3) ){
            if (l1 == l2 && l2 == l3) {
                return true
            }
            else{
                return false
            }
        } 
        else{
            return false
        }
    }

}

// Q 03:

class Conta {
	numero: String;
	saldo: number;

	constructor(numero: String, saldoInicial: number) {
		this.numero = numero;
		this.saldo = saldoInicial;
	}

	sacar(valor: number): void {
		this.saldo = this.saldo - valor;
	}

	depositar(valor: number): void {
		this.saldo = this.saldo + valor;
	}

	transferir(contaDestino: Conta, valor: number): void {
		this.sacar(valor);
		contaDestino.depositar(valor);
	}

}

class Banco {
	contas: Conta[] = [];
	
	inserir(conta: Conta): void {
        let count: number = 0;
        if (this.contas.length < 1){
            this.contas.push(conta);
        }
        else{
            for (let i = 0; i < this.contas.length; i++){
                if (this.contas[i].numero == conta.numero){
                    count += 1;
                }
                
            }

            if ( count != 1) {
                this.contas.push(conta);
            }

        }
		
	}
	
	consultar(numero: String): Conta {
		let contaConsultada: Conta;
		for (let conta of this.contas) {
			if (conta.numero == numero) {
				contaConsultada = conta;
				break;
			}
		}
		return contaConsultada;
	}

	consultarPorIndice(numero: String): number {
		let indice: number = -1;
		for (let i: number = 0; i < this.contas.length; i++) {
			if (this.contas[i].numero == numero) {
				indice = i;
				break;
			}
		}
		return indice;
	}

	alterar(conta: Conta): void {
		let indice: number = this.consultarPorIndice(conta.numero);
		if (indice != -1) {
			this.contas[indice] = conta;
		}
	}

	excluir(numero: string): void {
		let indice: number = this.consultarPorIndice(numero);
		
		if (indice != -1) {
			for (let i: number = indice; i < this.contas.length; i++) {
				this.contas[i] = this.contas[i+1];
			}

			this.contas.pop();
		} 
	}

	depositar(numero: String, valor: number): void {
		let contaConsultada = this.consultar(numero);

		if (contaConsultada != null) {
			contaConsultada.depositar(valor);
		}
	}

    sacar(numero: String, valor: number){
        let contaConsultada = this.consultar(numero)
        contaConsultada.sacar(valor)
    }

    transferir(numeroCredito: String, numeroDebito: String, valor: number){
        let contaInicial = this.sacar(numeroCredito, valor)
        let contaDestino = this.depositar(numeroDebito, valor)
        
    }

    quantidadeContas(): number{
        return this.contas.length
    }

    totalDinheiro(): number{
        let total = 0
        for (let i = 0; i < this.contas.length; i ++){
            total += this.contas[i].saldo;
        }

        return total
    }

    mediaSaldo(){
        let qtdContas = this.quantidadeContas()
        let dinheiro = this.totalDinheiro()
        let media = dinheiro/qtdContas

        return media.toFixed(1)
    }
}


// Q 04:
// a):

class Postagem{
    id: number
    texto: string
    quantidadeCurtidas: number

    curtir(){
        this.quantidadeCurtidas++
    }

    toString(): string{
        return this.texto + "\n" + this.quantidadeCurtidas + " curtidas\n"
    }
} 

// b):

class Microblog{
    postagens: Postagem[] = []

    inserir(post: Postagem){
        this.postagens.push(post)
    }

    consultarId(id: number): number{
        let indice: number = -1
        for(let i = 0; i < this.postagens.length; i++){
            if (this.postagens[i].id = id){
                indice = i;
                break
            }
        }
        return indice

    }

    excluir(id: number){
        let indice = this.consultarId(id)

        if (indice != -1){
            for (let i: number = indice; i < this.postagens.length; i++ ){
                this.postagens[i] = this.postagens[i+1]

            }
            this.postagens.pop()
        }
    }

    postagemMaisCurtida(){
        let curtidas = this.postagens[0].quantidadeCurtidas

        for (let i = 0; i < this.postagens.length; i++){
            if (curtidas < this.postagens[i].quantidadeCurtidas){
                curtidas = this.postagens[i].quantidadeCurtidas
            }
            else{
                continue
            }
        }

        for (let j = 0; j < this.postagens.length; j++){
            if ( this.postagens[j].quantidadeCurtidas == curtidas){
                return this.postagens[j]
            }
            else{
                continue
            }
        }

    }

    curtir(id: number){
        let indice = this.consultarId(id)

        if( indice != -1){
            this.postagens[indice].curtir()
        }
    }

    toString(){
        let concatenaçao = ""
        for( let i = 0; i < this.postagens.length; i++){
            concatenaçao += this.postagens[i].toString
            
        }
        return concatenaçao
    }
}

