interface Iteravel <T> {

    proximo(): T;
    atual(): T;
    isPrimeiro(): boolean;
    isUltimo(): boolean;
    irParaPrimeiro(): T;
}

class ColecaoArray<T> implements Iteravel<T> {
    array: T[] = [];
    count: number = 0;

    public proximo(): T{
        if (this.array[this.count+ 1] != undefined){
            return this.array[this.count+1];

        }

        return this.array[this.array.length -1];
    }

    public atual(): T{
        return this.array[this.count]
    }

    public isPrimeiro(): boolean{
        if (this.array[this.count] === this.array[0]){
            return true;
        }
        else{
            return false;
        }
    }

    public isUltimo(): boolean{
        if (this.array[this.count] === this.array[this.array.length - 1]){
            return true;
        }
        else{
            return false;
        }
    }

    public irParaPrimeiro(): T{
        this.count = 0;
        return this.array[this.count];
    }

    public add(valor: T){
        this.array.push(valor);
    }


}


let array = new ColecaoArray<number>();

//Adicionando valores a array
array.add(7);
array.add(10);
array.add(6);
array.add(15)
array.add(20);
array.add(4);
array.add(0);


console.log(array.atual());
// Resultado 7
console.log(array.proximo());
// Resultado 10
console.log(array.isUltimo());
// Resultado false
console.log(array.irParaPrimeiro());
// Resultado 7
console.log(array.isPrimeiro());
// Resultado true

