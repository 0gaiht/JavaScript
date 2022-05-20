

/* 1 - Dado o array [30, 30, 40, 5, 233, 2049, 3034, 5], retorne com valores únicos.*/

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr){
    const mySet = new Set(arr);

    return [...mySet]; // "..." argumento torna os elementos dentro do array.
 }

console.log(valoresUnicos(meuArray));