let notas = [6.5, 7.0, 7.5, 8.0, 8.5];
let soma = 0;

for (let i = 0; i < notas.length; i++){
    soma = soma + notas[i];
   }

   let media = soma / notas.length;

   console.log('A média dos alunos é: ' + media);
