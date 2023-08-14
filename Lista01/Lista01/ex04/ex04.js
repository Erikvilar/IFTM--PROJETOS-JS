alert("Olá caro usuario \n por gentileza me informe suas notas; \n \n ");
nome = prompt("Nome do aluno: ");

while(nome == null){
    alert("Entrada invalidade me informe seu nome");
}

nota1 = prompt("Informe sua nota do 1 Bimestre \n");

while(nota1 == null){
    alert("Entrada invalidade me informe sua nota do 1 Bimestre");
}

nota2 = prompt("Informe sua nota do 2 Bimestre \n");

while(nota2 == null){
    alert("Entrada invalidade me informe sua nota do 2 Bimestre");
}

alert("Estamos verificando suas notas");
alert("Aguarde estamos trabalhando nisso");
alert("Expulsando lacaios");
alert("Varrendo a taverna");


notaGeral = parseFloat(nota1) + parseFloat(nota2);

if(notaGeral >= 60.0){
    alert("Voce conseguiu passar nessa materia!")
}else{
    alert("Voce tera que refazer o ano \n Lamentamos :(")
}

alert(`Seu dados são \n ${nome}\n 1 Bimestre ${nota1} , 2 Bimestre ${nota2} = ` + notaGeral);

