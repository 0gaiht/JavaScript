

// FOR...in - Loop enre propriedades enumeráveis de um objeto.

function forInExemplo(obj){
    for(prop in obj){
        console.log(prop); //Desta forma é acessado as propriedades do objeto
    }
}

  const meuObjeto = {
      nome: "João",
      idade: "20",
      cidade: "Salvador"
  }

  forInExemplo(meuObjeto);
  //Nome
  //Idade
  //Cidade


//------------------------------------------------------------------

  function forInExemplo(obj){
    for(prop in obj){
        console.log(obj[prop]); //Desta outra forma, é acessado os valores atribuidos ao objeto.
    }
}

  const meuObjeto = {
      nome: "João",
      idade: "20",
      cidade: "Salvador"
  }

  forInExemplo(meuObjeto);
  //João
  //20
  //Salvador