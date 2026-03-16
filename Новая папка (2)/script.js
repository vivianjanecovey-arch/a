function openGift() {
    document.getElementById('envelope').style.display = 'none';
    document.getElementById('card').style.display = 'block';
    
    // Эффект конфетти
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
}

function flipCard() {
    document.getElementById('card').classList.toggle('flipped');
}