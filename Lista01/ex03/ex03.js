// nome = prompt("Qual seu nome?");
// idade = prompt("Quantos anos você tem?");

// if(idade < 18){
//     alert("Você não pode tirar carteira");
// }else{
//     alert("Você pode");
// }

// alert(`Sua informações são: \n nome ${nome} e você tem ${idade}! ` );


nome = prompt("Qual seu nome?");
idade = prompt("Quantos anos você tem?");

while(idade == null){
    alert("voce não pode sair da pagina");
    if(idade ==null){
         idade = prompt("vou te dar mais uma chance de digitar ")
    }

    alert(`Voce saiu do loop  ${nome} e ${idade} !`)
    

}