const students = [{
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
}]; 

let average = (score1, score2) => (score1 + score2) / 2;

for(let i = 0; i < students.length; i++) {

    const scoreStudent = average(students[i].score1, students[i].score2);

    if(scoreStudent >= 7) {
        alert(`A média do(a) aluno(a) ${students[i].name} é: ${scoreStudent}
        Parabéns ${students[i].name}, você foi aprovado(a)!`)
    } else {
        alert(`A média do(a) aluno(a) ${students[i].name} é: ${scoreStudent}
        Não foi dessa vez ${students[i].name}, você foi reprovado(a).`)
    }
}
