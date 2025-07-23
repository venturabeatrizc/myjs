let saudacao = "Olá";
let quem = "Mundo";

// Concatenação de strings

let mensagemFinal = saudacao + " " + quem + "!";
console.log(mensagemFinal);


let frase = "Javascript é legal hein";

// Comprimento da string
console.log(frase.length);

// Deixar em maiúscula
console.log(frase.toUpperCase());

// Deixar em minpuscula
console.log(frase.toLowerCase());

// Encontrar a posição na string
console.log(frase.indexOf("legal"));

// Extrair parte da string
console.log(frase.substring(0,10));

// Substituir parte da string
let novaFrase = frase.replace("legal", "incrível");
console.log(novaFrase)

// Interpolação de strings
let nome = "Bia";
let idade = "26";

let mensagem = `Meu nome é ${nome} e eu tenho ${idade} anos.`;
console.log(mensagem)