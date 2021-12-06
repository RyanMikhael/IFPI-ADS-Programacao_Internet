class ave{
    nome: string

    bicar(): void{}
    voar(): void{}
}

class beijaFlor extends ave{
    bicar(): void{}
    voar(): void{}
}

class pinguim extends ave{
    bicar(): void{}
    voar(): void{}
    // gera excessao pois a classe filha nao é capaz de realizar um método da classe pai
}
