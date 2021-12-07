interface calculadora{
    calcular(n1: number, n2: number);
}

class subtraçao implements calculadora{

    calcular(n1: number, n2:number){
        let sub = n1 - n2
        console.log('A subtraçao é igual a ' + sub)

    }
}

class soma implements calculadora{
    calcular(n1: number, n2:number){
        let sum = n1 + n2
        console.log('A soma é igual a ' + sum)

    }
}

class app{
    calcule(operaçao: calculadora){
        operaçao.calcular(3,4)
    }

}
