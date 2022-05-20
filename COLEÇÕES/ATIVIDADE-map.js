

/* 1 - Crie uma função que retorna o nome dos membros de um map que tem
um paapel 'ADMIN' no sistema. 
   2 - Crie um map e popule-o com nomes de usuários e seus papeis no sistema. 
(Ex: 'Luiz' => 'Admin');
   3 - Dentro de getAdmins, utilize o loop for..of para retornar uma lista com os 
nomes de usuários que são administradores. */

function getAdmins(map){
   let admins = [];
   for ([key, value] of map){
      if (value === 'Admin'){
         admins.push(key);
      }
   }
   return admins;
}

const usuarios = new Map();

usuarios.set ('Luiz', 'Admin');
usuarios.set('Thiago', 'Admin');
usuarios.set('dog', 'user');

console.log(getAdmins(usuarios));