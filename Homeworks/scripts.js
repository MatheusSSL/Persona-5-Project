const botao = document.getElementById("easterEgg");
const som = document.getElementById("somEasterEgg");

botao.addEventListener("click", () => {
    som.currentTime = 0; // reinicia o áudio
    som.play();
});