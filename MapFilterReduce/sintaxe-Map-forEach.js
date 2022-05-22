

/*____________________[MÉTODO MAP]_______________________


O que é?:
   - 1 Cria um novo array.
   - 2 Não modifica o array original.
   - 3 Realiza as operações em ordem. 

_________________________[SINTAXE]______________________*/

Array.map(callback, thisArg)

callback(item, index, array)

// Callback: Função a ser executada em cada elemento.
// thisArg (opcional): valor de 'this' dentro da função de callback.


/*______________________[MAP vs forEach]___________________________

  - A diferença entre os 2: - O valor retornado 
                            - Considere se o array auxiliar será necessário */    



// USANDO MAP
const array = [1, 2, 3, 4, 5];

array.map((item) => item * 2); // retorno: [2, 4, 6, 8, 10];


// USANDO forEach

const array = [1, 2, 3, 4, 5];

array.forEach((item) => item * 2); // Retorno: undefined 