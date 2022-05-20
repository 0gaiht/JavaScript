

/*_______________[MAP]_____________________

- Uma coleção de arrays no formato [chave, valor];
- Pode iterado por um loop for...of

________________SUA ESTRUTURA_______________*/

const MyMap = new Map()

/*_______________MÉTODO: ADICIONAR, LER e DELETAR do MAP_____________*/

const myMap = new Map ()

myMap.set('apple', 'fruit');
// Map(1) {"apple => "fruit"}

myMap.get("apple");
//"fruit"

myMap.delete("apple")
//true

myMap.get("apple")
//undefined


/*_______________Map vs Objeto_________________

- Maps podem ter chaves de qualquer tipo;
- Maps possuem a propriedade length;
- Maps são mais fáceis de iterar;
- Utilizando quando o valor das chaves é desconhecido;
- Os valores tem o mesmo tipo. 

