

/*________________________[SET]_______________________
 - São estruturas que armazenam apenas valores únicos. 

 EX: */

 const myArray = [1, 1, 2, 2, 2, 3, 4, 5, 6, 7, 8, 2, 1];
 const mySet = new set(myArray); 


 /*_________[MÉTODOS: ADICIONAR, CONSULTAR e DELETAR]______*/

 const mySet = new Set();

 mySet.add(1);
 mySet.add(5);

 mySet.has(1);
 //true

 mySet.has(3);
 //false

 MeuSet.delete(5);

 /*_____________[SET vs ARRAY]______________________

 1 - Possui valores únicos;
 2 - Em vez da propriedade length, consulta-se o número de resgistros pela propriedade 
 size;
 3 - Não possui os métodos map, filter, reduce etc.


 
