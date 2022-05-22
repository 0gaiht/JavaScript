
/*__________________[REDUCE]___________________

O que é? 
 - Executa uma função em todos os elemntos do array, retornando um valor único. 

 ___________________[SINTAXE]____________________*/

 Array.REDUCE(callbackFn, initialValue)

 // callback: Função a ser executada a partir do acumulador. 
 // initialValue (opcional): valor sobre o qual o retorno final irá atuar. 

 //_________________[EXECUTANDO]___________________

 const callbackFn = function(accumulator, currentValue, index, array){
     //do something
 }

 array.reduce(callbackFn, initialValue)

 /* 1 - Accumulator/preValue: acumulador de todas as chamadas de callbackFn.
    2 - currentValue: elemento atual sendo acessado pela função. */