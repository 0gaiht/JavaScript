
/*________________________[ PROTÓTIPOS ]________________________________

- Todos os objetos javascript herdam propriedades e métodosde um prototype.
- O objeto Object.prototype está no topo desta cadeia. 


_________________________[ CLASSES ]_________________________________

 - Syntatic sugar: Uma sintaze feita para facilitar a escrita 

 - Javascript não possuem classes nativamente. Todas as classes são 
 objetos e a herança se dá por protótipos. */




 
 //Forma antiga 
 
 var Meal = function (food){
     this.food = food
 }

 Meal.prototype.eat = function(){
     return'humm'
 }


 //Forma Nova

 class Meal {
     constructor (food) {
         this.food = food
     }

     eat(){
         return 'hummm'
     }
 }