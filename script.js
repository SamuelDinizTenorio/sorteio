// pegando o botão de sorteio
const drawBtn = document.getElementById('drawBtn');
// pegando o elemento onde o vencedor será exibido
const winner = document.getElementById('winner');

// Array de participantes
const participants = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

// Adicionando um evento de clique ao botão de sorteio
drawBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * participants.length); // Gera um índice aleatório
    const selectedParticipant = participants[randomIndex]; // Seleciona um participante aleatório
    winner.textContent = `Vencedor: ${selectedParticipant}`; // Exibe o vencedor
    winner.style.display = 'block'; // o vencedor aparece após o sorteio
    drawBtn.disabled = true; // Disativa o botão após o sorteio
    drawBtn.textContent = 'Sorteio realizado!'; // Muda o texto do botão
});