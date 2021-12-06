interface automovel{

    acelerar();
    frear();

}

interface empinar{

    empinarPneu();
}

interface viagemNoTempo{

    viajarNoTempo();
}


class ford implements automovel{
    acelerar(): void{}
    frear(): void{}

}

class fiat implements automovel{
    acelerar(): void{}
    frear(): void{}

}

class yamaha implements automovel, empinar{
    acelerar(): void{}
    frear(): void{}
    empinarPneu(): void{}


}

class deLorean implements automovel, viagemNoTempo{
    acelerar(): void{}
    frear(): void{}

    viajarNoTempo(): void{}

}
