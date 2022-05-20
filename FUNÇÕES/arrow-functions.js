

//----------[SINTAXE - ARROW FUNCTIONS]--------------

const helloWorld = function (){
    return "hello World";
}

/*-------[EXEMPLO PRÁTICO: A Função pode ser execultada apenas em uma linha
dispensando as chaves e o return, e caso exista apenas um parâmetro, pode dis-
pensar os parênteses]-----------------------------------------*/

const helloWorld = () => "hello World";

// ----------------[EXEMPLO 2]--------------------

const soma = (a, b) => a + b;

soma(4, 6);
//10


//----------[ATENÇÃO: ARROW FUNCTIONS NÃO FAZ HOISTING]----------
//----ELA SEMPRE TEM QUE SER DECLARADA ANTES DA FUNÇÃO--------


//--------------[OUTRAS RESTRIÇÕES DO ARROW FUNCTION]----------------

// 1 - "this" sempre será o objeto global. Métodos para modificar seu valor não irão funcionar
// 2 - Não existe o objeto "arguments"
// 3 - O construtur (ex: new MeuObjeto()) também não pode ser utilizado.