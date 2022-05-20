// OBJETO "ARGUMENTS"
//Retorna as entradas com a função "arguments"e especifica a maior delas

function findMax(){
    let max = - Infinity;

    for (let i = 0; i < arguments.length; i++){
        if (arguments[i] > max){
            max = arguments[i];
        }
    }
    return max; 
}

//EXEMPLO 2:
 
function showArgs (){
    return arguments;
}
