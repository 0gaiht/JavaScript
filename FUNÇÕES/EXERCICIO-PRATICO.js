

/*----------------[ATIVIDADE 01]------------------
1 - Crie um função que recebe o array alunos e um número que irá representar a média final;
2 - Percorra e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou igual à média final;
3 - Utilize a técnica "obect destructuring" para manipular as propriedades desejada de cada aluno.

-------------------[ATIVIDADE 02]-----------------------
1 - Dada a função calculaIdade, utilie os métodos call e aplly para modificar de this.
Crie seus próprios objetos para esta atividade. 


____________________RESOLUÇÃO ATIVIDADE 01_____________________*/


const alunos = [
{
    nome: 'Thiago',
    nota: 5,
    turma: '1b',
},

{
    nome: 'João',
    nota: 5,
    turma: '2b',
},

{
    nome: 'Tíbia',
    nota: 3,
    turma: '3b'
},

];

function alunosAprovados (arr, media){
   let aprovados = [];

   for (let i = 0; i < arr.length; i++ ){
       const {nota, nome} = arr[i];

       if (nota >= media){
           aprovados.push(nome);
       }

   }
   return aprovados; 
}

console.log(alunosAprovados (alunos, 5));

