function demonstrarSeletores() {
    let elementoPorId = document.getElementById('exemploID');
    elementoPorId.style.color = "blue";
    console.log("Selecionado por ID", elementoPorId);

    let elementoPorClasse = document.querySelectorAll('.exemploClasse');
    elementoPorClasse.forEach(elemento => {
            elemento.style.backgroundColor = "yellow";
            console.log("Selecionado por Classe", elemento)
        }
    );

    let elementoPorTag = document.querySelectorAll('p');
    elementoPorTag.forEach(elemento => {
            elemento.style.fontWeight = "bold";
            console.log("Selecionado por Tag", elemento)
        }
    );

    let elementoPorQuery = document.querySelector('.paragrafo');
    elementoPorQuery.style.fontSize = "20px";
    console.log("Selecionador por Query Selector", elementoPorQuery);

    let elementosPorQueryAll= document.querySelectorAll('.paragrafo');
    elementosPorQueryAll.forEach(elemento => {
        elemento.style.textDecoration = "underline";
        console.log("Selecionado por Query All", elemento)
    })
}