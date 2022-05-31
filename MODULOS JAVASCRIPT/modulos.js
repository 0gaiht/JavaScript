


/*_________________________[ MÓDULOS ]_________________________________

 - Módulos arquivos JavaScript que tem a capacidade de exportar
 e importar informações de outros arquivos do mesmo tipo. 


 _______________________ALGUMAS VANTAGENS_______________________________

   1)- Organização do código;
   2) - Compartilhamento de variáveis em escopos diferentes;
   3) - Explicita as dependências dos arquivos. 


   ________________________EXPORTAR_______________________________________
                         Named exports                                     */



//Pode declarar a 'export' antes da função.                         
export function mostraIdade (pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
}

export function mostraCidade (pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.cidade}`;
};

export function mostraHobby (pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.hobby}`
}



//Ou pode declarar o 'export' depois da função, todas as 2 formas são equivalentes.                         
    function mostraIdade (pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
}

    function mostraCidade (pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.cidade}`;
};

    function mostraHobby (pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.hobby}`
}

    export{
        mostraIdade,
        mostraCidade,
        mostraHobby
    }



    /*_____________________________EXPORTAR____________________________________
                                 Default exports


     - Só pode haver um por arquivo. 
     - Será o retorno padrão do seu arquivo.                                    */

     function mostraIdade (pessoa){
        return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
    }
    
        function mostraCidade (pessoa){
        return `A idade de ${pessoa.nome} é ${pessoa.cidade}`;
    };
    
        function mostraHobby (pessoa){
        return `A idade de ${pessoa.nome} é ${pessoa.hobby}`
    }
    
        export{
            mostraIdade,
            mostraCidade,
        }

        export default mostraHobby; 


/*____________________________________IMPORTAR_____________________________________

Named exports:                                                                     */
         import {funcao, variavel, classe} from './arquivo.js'



         
// Default exports: 
         import valorDefault from './arquivo.js' 
         

     
// TROCANDO NOME DE IMPORTS: 
         import { arquivo as Apelido } from './arquivo.js';
         Apelido.metodo();



// IMPORTANDO TODOS OS DADOS DE UM ARQUIVO

import * as INFOS from './arquivo.js'
INFOS.metodo();
console.log(INFOS.variavel);





/*______________________________[ VINCULANDO ao HTML ]____________________________

- Para fazer testes localmente (de um arquivo no seu compuador), será necessários estar
rodando um servidor. Isso pode ser feito utilizando a extensão 'Live Server' do VS CODE. */

<script type="module" src="./main.js"></script>



/*_________________________________[ CURIOSIDADES ]__________________________________

 - Módulos sempre estão em "strict mode"; 
 - Podem ser utilizadas as extensões .js e .mjs
 - Para testes locais, é necessário utilizar um servidor;
 - Ao importar, sempre lembre da extensão (.js, .mjs);
 - Ao importar, sempre utilize "./" como ponto de partida. 
   



    
