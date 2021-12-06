interface automovel{

    acelerar();
    frear();
    empinarPneu();
    viajarNoTempo();

}

class fiat implements automovel{
    acelerar(): void{}
    frear(): void{}
    empinarPneu(): void{}
    viajarNoTempo(): void{}
    // fere o principio já que um carro como fiat nao pode viajar no tempo ou empinar o pneu

}

class yamaha implements automovel{
    acelerar(): void{}
    frear(): void{}
    empinarPneu(): void{}
    viajarNoTempo(): void{}
    // fere o principio já que uma moto yamaha nao pode viajar no tempo

}

class deLorean implements automovel{
    acelerar(): void{}
    frear(): void{}
    empinarPneu(): void{}
    viajarNoTempo(): void{}
    // fere o principio já que um carro como deLorean nao pode empinar o pneu

}
