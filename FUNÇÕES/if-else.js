
// IF e ELSE 

function numeroPositivo(num){
    let resultado;

    if (num < 0){ //CONDIÇÃO
        resultado = false; // Declaração 1 (dentro de if): ocorre caso a condição seja verdadeira.
    } else {
        resultado = true; // Declaração 2 ( dentro de else): ocorre caso a condição seja falsa.
    }

    return resultado; 
}

numeroPositivo(2)
//true 

numeroPositivo(-9)
//False
