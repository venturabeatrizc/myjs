function calcurarLarguraEstante(livros) {
    const tamanhoLivro = 3.5;
    const prateleiras = 6;
    return livros * tamanhoLivro / prateleiras;
}

let livros = 240;
let largura = calcurarLarguraEstante(livros);

console.log(`A largura necessária para que a sua estante comporte ${240} livros é ${largura}cm²`);