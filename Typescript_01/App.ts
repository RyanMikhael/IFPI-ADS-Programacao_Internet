enum DiasSemana {Segunda, Terça, Quarta, Quinta, Sexta, Sabado, Domingo};

namespace DiasSemana {
    function isDiaUtil( dia: DiasSemana) {
        if ((dia == DiasSemana.Sabado) || (dia == DiasSemana.Domingo)){
            return false;
        }
        else{
            return true;
        }
    }
    let dia: DiasSemana = DiasSemana.Terça
    let dia2: DiasSemana = DiasSemana.Sabado
    
    console.log(isDiaUtil(dia));
    console.log(isDiaUtil(dia2));
}
