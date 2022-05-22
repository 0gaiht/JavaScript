

/*_______________[ATIVIDADE - MAP]_______________

 1)- Pratique a sintaxe de multiplicação de números, uma vez utilizando 
 o parâmentro 'this' de um objeto criado por você, e depois sem ele. */



const maçã = {
    value: 4,
};

const laranja = {
    value: 3,
};

function mapComThis(arr, thisArg) {  // 'this' se dá a respeito ao objeto declarado "aqui" 
    return arr.map(function (item) { // 'item' é primeiro item do array
        return item * this.value;    // retorna o 'item' multiplicado pelo 'value' 
    }, thisArg);     // a função 'this' percorre o array do primeiro item ao último. 
}

const nums = [1, 2];

console.log('this -> maçã', mapComThis(nums, maçã));

console.log('this -> laranja', mapComThis(nums, laranja));

