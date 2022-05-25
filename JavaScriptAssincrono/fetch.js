

/*_______________________[ fetch ]_______________________

 - Consumindo APIs */

 fetch(URL, options)
   .then(Response => Response.json())
   .then(json => console.log(json))

   //retorna uma Promise


/*___________[Operações no banco (POST, GET, PUT, DELETE, etc ]__________*/

 
         //GET
fetch('https://endereco-api.com/',{
     method: 'GET',
     cache: 'no-cache',
 })

   .then(Response => Response.json())
   .then(json => console.log(json))

   // retorna uma Promisse 




         //POST
fetch('https://endereco-api.com/',{
     method: 'POST',  // POST é quando vc manda informações a serem gravados no banco de dados.
     cache: 'no-cache',
     body: JSON.stringify(data) // Aqui vc converte de "JSON" para um "STRING"
 })

   .then(Response => Response.json())
   .then(json => console.log(json))

   // retorna uma Promisse 