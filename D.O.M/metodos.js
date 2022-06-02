

/*_______________________ESTRUTURAS HTML_______________________  

 <html>
   <head>
     <tittle> Minha Página </title>
    </head>
    
    <body> ----------------------------------------------------------> ( tag )
        <h1 id="titulo"> ---------------------------------------------------> ( id )

        <section class="texto">
          <h2> Sobre Mim </h2>
          <p> Texto sobre a pessoa aqui </p>

          <section class="texto"> --------------------------> ( Classe ) 
             <h2> Meus projetos</h2>
             <ul>
               <li>Projeto 1</li>
               <li>Projeto 2</li>
               <li>Projeto 3</li>
               </ul>
          </section> 

    </body>
    </html>



_________________________________[ MÉTODOS ]________________________________
                
    - Selecionando os elementos de uma página: 

    EX ACESSAR 'ID' HTML : 
                    
                    document.getElementById('titulo');  

          irá acessar o elemento o elemento <h1 id="titulo">Minha Página</h1>          
                
    EX ACESSAR 'tag' no HTML: 

                    document.getElementsByTagName('li');

            irá acessar [
                            <li>Projeto 1</li>
                            <li>Projeto 2</li>
                            <li>Projeto 3</li>
                         ]        

    IMPORTANTE: Será acessado todo os elementos da 'li', apara acessar apenas 1 elemento da sessão 
                terá que especificar dentro do array.                      


    EX ACESSAR CLASSE: 
     
                     [ 
                         <section class="texto">
          <h2> Sobre Mim </h2>
          <p> Texto sobre a pessoa aqui </p>

          <section class="texto"> --------------------------> ( Classe ) 
             <h2> Meus projetos</h2>
             <ul>
               <li>Projeto 1</li>
               <li>Projeto 2</li>
               <li>Projeto 3</li>
               </ul>
          </section> 

                     ]







_______________________ [ EXEMPLO querySelectorAll ]______________________________

<htm>
  <head>
      <tittle> Exemplo querySelectorAll</tittle>
  </head>

     <body>
          <div class="primeira-classe segunda-classe">
          <ul>
             <li class="opcao">opcao 1</li>
             <li class="opcao">opcao 2</li>
             <li class="opcao">opcao 3</li>
           </div>
     </body>
     </html>



 ACESSANDO: _______________________________________________

  document.querySelectorAll('.primeira-classe .segunda-classe');


  SERÁ ACESSADO: 
                [
                    <div class="primeira-classe segunda-classe">
          <ul>
             <li class="opcao">opcao 1</li>
             <li class="opcao">opcao 2</li>
             <li class="opcao">opcao 3</li>
           </div>
                ]

 ACESSANDO PELA tag:____________________________________________
  
   document.querySelectorAll('li .opcao');

   SERÁ ACESSADO:
                  [
                      <li class="opcao">opcao 1</li>
                      <li class="opcao">opcao 2</li>
                      <li class="opcao">opcao 3</li>
                  ]
          




_______________________[ ADICIONAR e DELETAR ]________________________

    
          MÉTODO                    /             DESCRIÇÃO
 document.createElement(element)    /  Cria um novo elemento HTML     
 document.removeChild(element)      /       remove um elemento
 document.appendChild(element)      /      adiciona um elemento
 document.replaceChild(new,old)     /      substitui um elemento              
                