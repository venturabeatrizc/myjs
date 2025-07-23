// organizados em classes, atributos e métodos
// método = ação. funções
// atributo = booleano. resultado

let album = 
{
    nome: "Lilac",
    artista: "IU",
    ano: 2020,
}

//Chamar um objeto
console.log(album.nome);
console.log(album.artista);
console.log(album.ano);

//Modificar
album.nome = "Love Poem";
album.ano = 2019;

//Adicionar
album["genero"] = "Pop"

console.log(album.nome);
console.log(album.artista);
console.log(album.ano);
console.log(album.genero);