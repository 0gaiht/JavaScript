
/*----------[FUNÇÃO - AUTOINVOCÁVEIS]---------------
-----LIFE (Immediately invoked Function Expression)----

É uma função entre parênteses seguida por outro par de parênteses,
que representa sua chamada*/ 

(
    function (){
        let name = "Digital Inovation One"
        return name; 

    }
)();


//EXEMPLO 2: 

(
function (a, b) {
    return a + b;
}
)(1, 2);

//Exemplo 3

const soma3 = (
    function() {
        return a +b; 
    }
)(1, 2);

console.log(soma3) 
