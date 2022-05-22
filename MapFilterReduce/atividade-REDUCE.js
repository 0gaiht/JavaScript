

/*___________________[ATIVIDADE - REDUCE]_______________________

1) - Some todos os números de umarray. 
2) - Crie uma função que recebe uma lista de preços e um número representando 
o saldo disponível. Calcule qual será o saldo final após subtrair todos os 
preços das listas eviadas. */


/*________________[QUESTÃO 1]___________________*/

function somaNumeros(arr){
    return arr.reduce(function (prev, current){
        return prev + current;
    });
}

const arr = [1, 2]; 

console.log(somaNumeros(arr))


/*______________ [QUESTÃO 2]_________________________*/


const lista = [
    {
        nome: 'sabão',
        preco: 9,
    },
    {
        nome: 'lapis',
        preco: 5,
    },
    {
        nome: 'notebook',
        preco: 50,
    }
];

const saldoDisponivel = 100; 

function calculaSaldo (saldoDisponivel, lista){
    return lista.reduce(function(prev, current){
        return prev - current.preco;  // 'prev' é o valor anterior e o 'current' o valor atual
    },saldoDisponivel);
    
}

console.log(calculaSaldo(saldoDisponivel, lista));