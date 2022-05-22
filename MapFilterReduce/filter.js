

/*_____________[MÉTODO FILTER]_________________

O QUE É?
  - Cria um novo array.
  - Não modifica o array. 

  _______________[PARÂMETROS]___________________*/

  array.filer(callback, thisArg)


  /* callback: função a ser executada em cada elemento.
      thisArg (opcional): valor de 'this' dentro da função de callback.

__________________[EXEMPLO]_________________________*/

const frutas = ['maçã fuji', 'maçã verde', 'laranja', 'abacaxi'];

frutas.filter((frutas) => frutas.includes('maçã'))

// retorno: ['maçã fuji', 'maçã verde'];


/* Observação: 
               - callback: função a ser executada em cada elemento
               - thisArg(opcional): valor de 'this' dentro da função callback