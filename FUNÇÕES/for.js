

// FOR - Loop dentro de elementos iteráveis (arrays, Strings).

function multiplicaPorDois(arr){
    let multiplicados = [];

    for(let i = 0; i <arr.length; i++){
        multiplicados.push(arr[i] * 2);
    }
     return multiplicados;
}

const meusNumeros = [2, 33, 456, 356, 40];

multiplicaPorDois(meusNumeros);
//[4, 66, 912, 712, 80]



