/*
💡 Principais pontos abordados nesse desafio:

- Estrutura de dados com objetos;
- Estrutura de repetição;
- Criação de funções;
- Operadores comparativos;


Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.


*/

const students = [
{
    name: "Vinicius",
    score1: 5,
    score2: 6
},
{
    name: "Wagner",
    score1: 4,
    score2: 7
},
{
    name: "Marilia",
    score1: 6,
    score2: 6
},
{
    name: "Francisco",
    score1: 6,
    score2: 8
}
]

let average = (score1, score2) => (score1 + score2) / 2;

for(let i = 0; i < students.length; i++) {

    const scoreStudent = average(students[i].score1, students[i].score2)

    if(scoreStudent >= 7) {
        alert(`A média do(a) aluno(a) ${students[i].name} é: ${scoreStudent}
        Parabéns ${students[i].name}, você foi aprovado(a)!`)
    } else {
        alert(`A média do(a) aluno(a) ${students[i].name} é: ${scoreStudent}
        Não foi dessa vez ${students[i].name}, você foi reprovado(a).`)
    }
}
