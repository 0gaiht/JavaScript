

//ARRAYS - REST: COMBINA OS ARGUMENTOS EM UM ARRAY


function confereTamanho(...args){
    console.log(args.length) //a sintaxe "args.length" confere o tamanho da lista
}

confereTamanho() // itens dentro da lista 0
confereTamanho(1, 2) // itens dentro da lista 2
confereTamanho(3, 4, 5)//itens dentro da lista 3