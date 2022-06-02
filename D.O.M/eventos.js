
/* ______________________[ EVENTOS DO MOUSE ]______________________

    - Mouseover, mouseout 



______________________[ EVENTOS DE ATUALIZAÇÃO ]_______________________

    - Change, load


______________________[ EVENT LISTENER ]_________________________

Diretamente no JavaScript, cria um evento que vai ser acionado no momento
em que o usuário realizar determinada ação. 

 EX: */ 
   
   const botão = document.getElementById("meuBotao");

   botao.addEventListener("click", outraFuncao);


/*_______________________[ ATRIBUTO HTML ]________________________
  - O evento também pode ser inserido dentro do próprio HTML: */


  <html>
      <body>
          <h1 onclick="mudaTexto(this)"Clique aqui!</h1>

          <script>
          function mudaTexto(id){
              id.innerHTML = "Mudei!";
          }
          </script>
      </body>
  </html>

  // Especifica a função a ser chamada diretamente no elemento HTML. 