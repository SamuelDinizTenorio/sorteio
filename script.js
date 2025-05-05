// pegando o botão de sorteio
const drawBtn = document.getElementById('drawBtn');
// pegando o elemento onde o vencedor será exibido
const winner = document.getElementById('winner');

// Array de participantes
const participants = ['Kelvia', 'Carla', 'Josinaldo', 'Diane', 'Maria Edna', 'Terezinha', 'Silvia', 'Maria José Diniz', 'Aparecida', 'Poliana', 'Jeane Diniz', 'Hina', 'Kamila', 'Jamila'];

// Função para animar os círculos
function animateCircles() {
    const circles = document.querySelectorAll('.circle');
    circles.forEach((circle, index) => {
        circle.style.animation = `floatUp 6s ease-in-out ${index * 0.7}s forwards infinite`; // Aumenta o delay entre os círculos
    });
}

// Adicionando um evento de clique ao botão de sorteio
drawBtn.addEventListener('click', () => {
    const countdown = [3, 2, 1]; // Array com os números da contagem regressiva

    // Loop para criar a contagem regressiva
    for (let i = 0; i < countdown.length; i++) {
        setTimeout(() => {
            drawBtn.textContent = countdown[i]; // Atualiza o texto do botão com o número da contagem
        }, (i + 1) * 1000); // Define o tempo de espera para cada número
    }

    // Após a contagem regressiva, atualiza o texto do botão para "Sorteio em andamento..."
    setTimeout(() => {
        animateCircles(); // Chama a função para animar os círculos
    }, (1 * 1000)); // Espera 1 segundo antes de iniciar a animação

    // Após a contagem regressiva, realiza o sorteio
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * participants.length); // Gera um índice aleatório
        const selectedParticipant = participants[randomIndex]; // Seleciona um participante aleatório
        winner.textContent = `Vencedor(a): ${selectedParticipant}`; // Exibe o vencedor
        winner.style.display = 'block'; // Mostra o vencedor
        drawBtn.disabled = true; // Desativa o botão após o sorteio
        drawBtn.textContent = 'Sorteio realizado!'; // Atualiza o texto do botão
    }, (countdown.length + 1) * 1000); // Espera o tempo da contagem regressiva antes de realizar o sorteio
});
