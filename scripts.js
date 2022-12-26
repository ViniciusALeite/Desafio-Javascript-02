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
    nota1: 5,
    nota2: 6
},
{
    name: "Wagner",
    nota1: 4,
    nota2: 7
},
{
    name: "Marilia",
    nota1: 6,
    nota2: 6
},
{
    name: "Francisco",
    nota1: 6,
    nota2: 8
}
]

let media = (nota1, nota2) => (nota1 + nota2) / 2;

for(let i = 0; i < students.length; i++) {

    const scoreStudent = media(students[i].nota1, students[i].nota2)

    if(scoreStudent >= 7) {
        alert(`A média do(a) aluno(a) ${students[i].name} é: ${scoreStudent}
        Parabéns ${students[i].name}, você foi aprovado(a)!`)
    } else {
        alert(`A média do(a) aluno(a) ${students[i].name} é: ${scoreStudent}
        Não foi dessa vez ${students[i].name}, você foi reprovado(a).`)
    }
}
