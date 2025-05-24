// --- SCRIPT DO CONTADOR REGRESSIVO ---
function startCountdown() {
    const countdownElement = document.getElementById('countdown-timer');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (!countdownElement || !hoursEl || !minutesEl || !secondsEl) {
        console.error("Um ou mais elementos HTML do contador (timer, hours, minutes, seconds) não foram encontrados. Verifique os IDs no HTML.");
        if (countdownElement) {
            countdownElement.innerHTML = "Erro: Elementos HTML faltando";
        }
        return;
    }

    const targetDateString = "May 25, 2025 10:46:27"; // Data alvo fixa
    let countDownTime = new Date(targetDateString).getTime();

    console.log("Data Alvo String:", targetDateString);
    console.log("countDownTime (timestamp):", countDownTime);

    if (isNaN(countDownTime)) {
        console.error("A DATA ALVO FORNECIDA É INVÁLIDA:", targetDateString);
        countdownElement.innerHTML = "Erro: Data Alvo Inválida";
        return;
    }

    let interval; 

    const updateTimer = () => {
        const now = new Date().getTime();
        const distance = countDownTime - now;

        if (distance < 0) {
            countdownElement.innerHTML = "CHEGOU O MOMENTO!";
            if (interval) clearInterval(interval); 
            return;
        }

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');
    };

    updateTimer(); 
    interval = setInterval(updateTimer, 1000); 
}

// --- SCRIPT PARA DATAS DINÂMICAS (NA CARTA E FINALIZAÇÃO) ---
function setDates() {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('pt-BR', options);
    
    const letterDateEl = document.getElementById('letterDate');
    if (letterDateEl) {
        letterDateEl.textContent = " (" + formattedDate + ")"; 
    }

    const finalDateEl = document.getElementById('finalDate');
     if (finalDateEl) {
        finalDateEl.textContent = ""; 
    }
}

// --- INICIA AS FUNÇÕES QUANDO A PÁGINA É CARREGADA ---
window.onload = function() {
    startCountdown();
    setDates();
    document.body.classList.add('loaded'); 
};