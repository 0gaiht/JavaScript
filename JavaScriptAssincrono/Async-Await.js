

/*_______________ Async / Await _______________________
 
 - Funções assíncronas precisam dessas duas palavras chave. */

 async function resolvePromise() {
     const myPromise = new Promise((resolve, reject) => {
         window.setTimeout(() => {
             resolve('Resolvida');
         }, 3000);
     });
    
     const resolved = await myPromise
           .then((result) => result + ' passando pelo then')
           .then((resulted) => result + ' e agora acabou!')
           .catch((err) => console.log(err.message));

       return resolved;

    }


    /*_____________ EXEMPLO UTILIZANDO TRY...CATCH_______________*/

    async function resolvePromise() {
        const myPromise = new Promise((resolve, reject) => {
            window.setTimeout(() => {
                resolve('Resolvida');
            }, 3000);
        });
       
    let result;

       try{
           result = await myPromise
             .then((result) = > result + ' passando pelo then')
             .then((result) => result + ' e agora acabou')
       } catch(err){
           result = err.message;
       }
       return result; 
   
       }