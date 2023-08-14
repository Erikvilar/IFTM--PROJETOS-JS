alert("Informe no campos seguintes 3 valores de 0 a 255 equivalente as cores RGB")
cor1 = parseInt(prompt("Informe o primeiro valor: "));
cor2 = parseInt(prompt("Informe 0 segundo valor : "));
cor3 = parseInt(prompt("Informe 0 terceiro valor: "));




document.write(`<p style='color:rgb(${cor1},${cor2},${cor3}); text-align:center'>Fundamentos de Web Design II</p>`);