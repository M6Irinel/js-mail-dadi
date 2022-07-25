
const button = document.querySelector('button');

button.addEventListener('click', () => {
    console.clear();

    // Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
    let giocatore, computer;

    // VARIABILE PER IL GIOCATORE
    giocatore = Math.floor(Math.random() * 6) + 1;
    console.log(giocatore + ' :Il giocatore ha questo punteggio');

    // VARIABILE PER IL COMPUTER
    computer = Math.floor(Math.random() * 6) + 1;
    console.log(computer + ' :Il computer ha questo punteggio');

    // Stabilire il vincitore, in base a chi fa il punteggio più alto.
    if (giocatore > computer) {
        console.log('HAI VINTO!');
    } else if (computer > giocatore) {
        console.log('HAI PERSO!');
    } else {
        console.log('SIETE A PARI!');
    }
});