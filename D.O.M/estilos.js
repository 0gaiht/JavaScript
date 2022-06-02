

/* ____________________________[ CLASSES ]__________________________
                            Element.classList                        */



//HTML
<div di="meu-elemento" class="classe"></div>


//JavaScript 

  const meuElemento = document.getElementById("meu-elemento")

  meuElemento.classList.add("novo-estilo");
    //Adiciona a classe "meuestilo"

  meuElemento.classList.remove("classe")
    // Remove a classe "classe"
    
  meuElemento.classList.toggle("dark-mode")
    //Adiciona a classe "dark-mode" caso ela não faça parte da lista e remove ela caso faça. 



//RESULTADO 

   <div id="meu-elemento" class="novo-estilo dark-mode"> </div>




//___________________[ ACESSANDO DIRETAMENTE O CSS DE UM ELEMENTO ]_______________________

   document.getElementsByTagName("p").style.color = "blue"; 
                        