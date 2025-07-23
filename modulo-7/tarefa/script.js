let formulario = document.getElementById('formulario');

let genero = document.getElementById('genero');
let generoOutro = document.getElementById('generoOutro');

genero.addEventListener('change', function() {
    if (genero.value === 'outro') {
    generoOutro.classList.remove('hidden');
    } else {
    generoOutro.classList.add('hidden');
    document.getElementById('descricaoGenero').value = '';
    }
});

let mensagem = document.getElementById('mensagem');
let titulo = document.getElementById('titulo')

formulario.addEventListener('submit', function(mensagemEnviada) {
    mensagemEnviada.preventDefault();

    let nome = document.getElementById('nome').value;
    mensagem.textContent = `Obrigada, ${nome}! Sua mensagem foi enviada!`;

    formulario.reset();

    generoOutro.classList.add('hidden');

    titulo.innerHTML = "Cadastre-se novamente!";
});