let album = 
{
    nome: "Lilac",
    artista: "IU",
    ano: 2020,
}

// console.log(album.nome);
// console.log(album.artista);
// console.log(album.ano);

album.nome = "Love Poem";
album.ano = 2019;

album["genero"] = "Pop"

console.log(album.nome);
console.log(album.artista);
console.log(album.ano);
console.log(album.genero);