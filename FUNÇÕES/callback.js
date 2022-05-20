
/*---------[FUNÇÃO: CALLBACK]---------------------------
É uma função passada como argumento para a outra, com isso vc tem um maior 
controle das chamdas. */ 

const calc = function(operacao, num1, num2){
    return operacao(num1, num2);
}

const soma = function(num1, num2){
    return num1 + num2;
}

const sub = function(num1, num2){
    return num1 - num2;
}

const resultSoma = calc(soma, 1, 2);
const resultSub = calc(sub, 1, 2);


console.log(resultSoma);
console.log(resultSub);


