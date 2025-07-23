// for (inicializador, encerrador, incrementador) = enquanto (faz e incrementa) / ideal para quando o número de interações é conhecido
// while (string com a condição)= enquanto (faz e não incrementa, até que um fator externo mude a variavel) / ideal para quando número de iterações não é conhecido e depende de uma condição que é verificada antes de cada iteração
// do while = enquanto (faz e depois pergunta se deve fazer de novo, começa sempre ativo) / garante que o bloco de código seja executado pelo menos uma vez,

let i = 0;

for (i = 0; i <5; i++) {
    console.log(`Resultado da variável ${i}`); 
}

// while (i < 5) {
//     console.log(`Resultado da variável é ${i}`);
//     i++;
// }

// do {
//     console.log(`Resultado da variável é ${i}`);
//     i++;
// } while (i < 5);     