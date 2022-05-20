

/*-------------------[ATIVIDADE 02]-----------------------
1 - Dada a função calculaIdade, utilie os métodos call e aplly para modificar de this.
Crie seus próprios objetos para esta atividade. 

function  calculaIdade(anos){
    return 'daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.';
} */

function  calculaIdade(anos){
    return `daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
}

const pessoa1 = {
    nome: 'Thiago',
    idade: 30,
};

const pessoa2 = {
    nome: 'maria',
    idade: 40,
};

const pessoa3 = {
    nome: 'ana',
    idade: 20,
}

console.log(calculaIdade.aplly(pessoa1, [4])); // chamada com apply

console.log(calculaIdade.call(pessoa3, 40)); // chamada com call