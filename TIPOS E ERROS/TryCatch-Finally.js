

/* _____________[ Try...cat ]_____________________*/

function verificaPalindromo(string){
    if (!string) throw "string inválida"; // O metodo 'Throw' para retorno do erro e especificação do mesmo. 

    return string ===
    string.split('').reverse().join('');
}

function tryCatchExemplo(string){
    try {
        verificaPalindromo(string)  //Dentro do bloco 'Try' ele executa toda a função do verificaPalindrmo
    }
    catch(e){
        console.log(e)  // porém o catch, ele trata o erro, no caso ele foi especificado apenas para retorno do log de erro que será de string inválida.
    }
}

tryCatchExemplo('');





/* _____________[ Try...cat ] [ EXEMPLO 2 ]_____________________*/

function verificaPalindromo(string){
    if (!string) throw "string inválida"; // O metodo 'Throw' para retorno do erro e especificação do mesmo. 

    return string ===
    string.split('').reverse().join('');
}

function tryCatchExemplo(string){
    try {
        verificaPalindromo(string)  //Dentro do bloco 'Try' ele executa toda a função do verificaPalindrmo.
    }
    catch(e){
        console.log(e)
          throw e;     // No exemplo 2, o catch é tradado como 'throw' retornando o erro uncaught string inválida.
    }
}

tryCatchExemplo('');








/* _____________[ Try...cat ] [ EXEMPLO 3 ]_____________________*/

function verificaPalindromo(string){
    if (!string) throw "string inválida"; // O metodo 'Throw' para retorno do erro e especificação do mesmo. 

    return string ===
    string.split('').reverse().join('');
}

function tryCatchExemplo(string){
    try {
        verificaPalindromo(string)  //Dentro do bloco 'Try' ele executa toda a função do verificaPalindrmo.
    }
    catch(e){
        console.log(e)
          throw e;     // 
    }
    finally {
        console.log('A string enviada foi:' + string); // A função 'finally' é uma linha de código onde será executada mesmo se as funções acima retornarem erro.
    }                                                  // Retornará: A string enviada foi:
}                                                      //            Uncaught String Inválida 

tryCatchExemplo('');