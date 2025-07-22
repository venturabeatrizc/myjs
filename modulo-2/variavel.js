function armazenarValor() {

    // Armazena o valor
    var userInput = document.getElementById('userInput').value;

    // Exibe o valor armazenado
    console.log("O valor da variavel é: " + userInput);

    // atualiza o conteúdo
    document.getElementById('valorInserido').innerText = "O valor inserido é: " + userInput;

}