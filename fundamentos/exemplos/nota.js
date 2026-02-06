const aluno = prompt("qual nome do aluno?")
const nota1 = parseFloat(prompt("qual a primeira nota?"))
const nota2 = parseFloat(prompt("qual a segunda nota?"))

const media = (nota1 = nota2) / 2

alert(`A media das notas ${nota1} e ${nota2} é ${media}`)