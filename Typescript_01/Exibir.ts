function exibir(...rest_parameter: string[]){
    for( let parameter of rest_parameter){
        console.log(parameter);
    }
    console.log('\n');
}

exibir("a","b");
exibir("a","b","c","d");
