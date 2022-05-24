
/*___________________[ ATIVIDADE 01]___________________

- Atividade: validação de erros por tipo.

O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda
ao número enviado como parâmetro na função. 


 . Crie uma função que receba um array e um número 
 . Realize as seguintes validações 
    - Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
    - Se o array não foi do tipo 'object' lance um erro do tipo TypeError
    - Se o número não for do tipo 'number' lance um erro do tipo TypeError
    - Se o tamanho do array for diferente do número enviado como parâmentro, lance
    um erro do tipo RangeError
    - Utilize a declaraçao try...catch
    - filtre as chamadas de catch por cada tipo de erro utilizado o operador instanceof



    ____________________[ RESOLUÇÃO DA ATIVIDADE ]________________________*/


function validaArray(arr, num){  // 1º tarefa - criar um função que receba um array e número.
  try{ // 4º - Utilize a declaraçao try...catch
   
    if(!arr && !num) throw new ReferenceError("Envie os parâmentros"); ///2º Lance o erro do tipo ReferenceError
  
    if(typeof arr !== 'object') throw new TypeError("Num precisa ser do tipo object"); //3º - Se o número não for do tipo 'number' lance um erro do tipo TypeError
  
    if(arr.length !== num) throw new RangeError("Tamanho inválido"); //Se o tamanho do array for diferente do número enviado como parâmentro, lance um erro do tipo RangeError
  
    return arr;

  }
  catch(e){
      if(e instanceof ReferenceError){                  // 5º - filtre as chamadas de catch por cada tipo de erro utilizado o operador instanceof
          console.log("Este erro é um ReferenceError");
          console.log(e.message)
      } else if(e instanceof TypeError){
        console.log("Este erro é um TypeError");
        console.log(e.message)
      } else if(e instanceof RangeError){
        console.log("Este erro é um RangeError");
        console.log(e.message)
      }else {
          console.log("Tipo de erro não esperado:" + e);
      }

  }
}

console.log(validaArray()); 