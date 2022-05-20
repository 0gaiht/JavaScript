

//This
// A palavra reservada This é uma referencia de contexto.
// No exemplo, THIS refere-se ao objeto da pessoa. 

const pessoa = {
    firstName: "Andre",
    lastName : "Soares",
    id       : 1,
    fullName : function(){
        return this.firstName + " " + this.lastName;
    },
    getId: function(){
        return this.id;
    }
};

pessoa.fullName();
// "Andre Soares"

pessoa.getId();
// 1



//---------------------------This: O que é? -------------------------------------

//Seus valor pode mudar de acordo com o lugar no código onde foi chamada. 

// CONTEXTO                                      REFERÊNCIA  
//--Em um objeto (método)        /\     Próprio objeto dono do método
//--Sozinha                      /\  Objeto global (em navegadres, window)   
//--Função                       /\           Objeto Global
//--Evento                       /\     Elemento que recebeu o evento




//-----------------------------[MÉTODO: Call]---------------------------------
 

const pessoa = {
  nome: 'miguel',
};

const animal = {
    nome: 'Murphy',
};

function getSomething(){
    console.log(this.nome);
}

getSomething.call(pessoa); // A chamada .call faz com que o this.nome chame a ( const pessoa ).
// Miguel 

getSomething.call(animal); // A mesma coisa ocorre para animal.
//Murphy



//-------------------------------[MÉTODO: Call] - EXEMPLO 2------------------------------------------



const myObj = {
    num1: 2,
    num2: 4,
};

function soma (a, b){
    comsole.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj, 1, 5); // É possível passar parâmetros para essa função separando-os por vírgulas. 
//12


//----------------------------------[MÉTODO: APLLY]----------------------------------------------------

const pessoa = {
    nome: 'Miguel',
};

const animal ={
    nome: 'Godi',
};

function getSomething(){
    console.log(this.nome);
}

getSomething.apply(pessoa);
//Miguel
getSomething.apply(animal);
//Godi

//-----------------------------[MÉTODO: APPLY] - [EXEMPLO 2]------------------------------------------

const myObj = {
    num1: 2,
    num2: 4,
};

function soma (a, b){
    comsole.log(this.num1 + this.num2 + a + b);
}

soma.apply(myObj, [1, 5]); // A diferença do Apply para o call, é que a função Apply é possível passar parâmetros para dentro o Array.
//12


//-------------------------------------[MÉTODO: BIND]---------------------------------------
//Clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro.
const retornaNomes = function (){
    return this.nome;
};

let bruno = retornaNomes.bind({nome:'Bruno'});

bruno();
//Bruno