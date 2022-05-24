

/*__________[ Objeto Error]____________*/


new Error(message, fileName, lineNumber)

// todos os parâmentros são opcionais

const MeuErro = new Error('Mensagem Inválida');

throw MeuErro; 


//Resultado: 
/* uncaught Error: Mensagem Inválida
      at <anonymous>: 1:17
   (anonymous)@VM60:1 */



   
   
   // __________[ EXEMPLO 2]_______________

const MeuErro = new Error('Mensagem Inválida');
MeuErro.name = 'invalidMesage';

throw MeuErro; 

//Resultado: 
/* uncaught InvalidMessage: Mensagem Inválida
      at <anonymous>: 1:17
   (anonymous)@VM60:1 */

