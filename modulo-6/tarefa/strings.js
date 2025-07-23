let curso = "Javascript";
let modulo = "6";

// Concatenação de strings

let mensagemFinal = "Bem vindo ao curso de " + curso + ". Esse é o módulo " + modulo + " - Próximos passos com " + curso;
console.log(mensagemFinal);


let frase = "Estou aprendendo Javascript! Que legal!";

// Comprimento da string
console.log(frase.length);

// Deixar em maiúscula
console.log(frase.toUpperCase());

// Deixar em minpuscula
console.log(frase.toLowerCase());

// Encontrar a posição na string
console.log(frase.indexOf("aprendendo"));

// Extrair parte da string
console.log(frase.substring(6,16));

// Substituir parte da string
let novaFrase = frase.replace("legal", "incrível");
console.log(novaFrase)

// Interpolação de strings
let nome = "Bia";
let idade = "26";

let mensagem = `Meu nome é ${nome} e eu tenho ${idade} anos.`;
console.log(mensagem)