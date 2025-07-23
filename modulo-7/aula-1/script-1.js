let titulo = document.getElementById('titulo')
let descricao = document.querySelector('.descricao')
let botao = document.getElementById('botao')

botao.addEventListener("click" , function() {
    titulo.innerHTML = "Foi manipulado com o DOM";

    descricao.innerHTML = "O conteúdo também foi alterado";

    titulo.classList.toggle('hightlight');
});