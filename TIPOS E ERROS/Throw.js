

/*_______________[ Throw ]________________ */

function verificaPalindromo (string){
    if (!string) return "string inválida"; // o ''return' irá retornar a string inválida caso seja declarado algo diferente de uma string

    return string === string.split('').reverse().join('');
}

verificaPalindromo('cat');






function verificaPalindromo(string){
    if (!string) throw "String inválida"; // Já o 'throw' irá retornar o erro e sua causa e suas propriedades. 

    return string === string.split('').reverse().join('');
}

verificaPalindromo('cat');