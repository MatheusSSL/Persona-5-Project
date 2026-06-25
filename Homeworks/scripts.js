const botao = document.getElementById("easterEgg");
const som = document.getElementById("somEasterEgg");

botao.addEventListener("click", () => {
    som.currentTime = 0; // reinicia o áudio
    som.play();
});

// Pegamos a referência do arquivo de áudio pelo ID
const musica = document.getElementById('som-background');

// DEFINE O VOLUME FIXO AQUI (Ex: 0.1 = 10%, 0.5 = 50%, 1.0 = 100%)
musica.volume = 0.3;

// Função para dar o Play
function tocarMusica() {
  musica.play();
}

// Função para dar o Pause
function pausarMusica() {
  musica.pause();
}
