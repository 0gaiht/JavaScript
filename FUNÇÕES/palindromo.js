


// ATIVIDADE 1 - PALINDROMO. 
// Solução 1 : 

function verificarPalindromo (string){
 if (!string) return "String enexistente";

 return string.split("").reverse().join("") === string; 

}


// ATIVIDADE 1 - PALINDROMO. 
// Solução 2 : 

function verificarPalindromo2 (string){
  if (!string) return "String inexistente";

  for (let i = 0; i < string.length / 2; i++){
      if (string[i] !== string[string.length - 1 -i]){
          return false;
      }
  }
         return true;
}

console.log (verificarPalindromo2("abba"));