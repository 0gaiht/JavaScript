

/*____________[ PROMISES ]________________

 - Objeto de processamento assíncrono 

 - Inicialmente, seu valor é desconhecido. Ela pode então
 ser resolvida ou rejeitada.

 ________ A PROMISE pode ter 3 estados:_________

 1)- Pending    2)- Fulfilled  3)- Rejected 


 _________ESTRUTURA DE UMA PROMISE_____________________*/


 const myPromise = new Promise((resolve, reject) => {
     window.setTimeout(() => {
         resolve(console.log('Resolvida'));
     }, 2000);
 });  // Até aqui, se der o console.log em myPromise, retornará 'Resolvida' após 2 segundos. 

 await myPromise
          .then((result) => result + ' passando pelo then')
          .then((result) => result + ' e agora acabou')
          .catch((err) => console.log(err.message)); // O catch serve para capturar algum erro e retornar a mensagem


        // Após 2 segundos retornará o valor 
        // "Resolvida pelo then e agora acabou!"

// Quando uma Promise é resolvida, você consegue pegar o resultado