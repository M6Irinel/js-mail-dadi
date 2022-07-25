
// *creaiamo un array con diverse stringhe con valori stile email
const EMAIL_ARRAY = ['boolean@gmail.it', 'professore@gmail.it', 'mauro@gmail.it', 'tiziano@gmail.it', 'tutor@gmail.it', 'italia@gmail.it', 'romania@gmail.ro'];

// creiamo una variabile di tipo booleana per avere una sola risposta
let seiNellaLista = false;

const CARRATTERI_MINIMI = 'xxx@gmail.it';

// *Chiedi all’utente la sua email
const EMAIL_DEL_UTENTE = prompt('Per accedere ci serve la tua email, per favore');

// SE nel prompt non ce sritto niente, manda un messaggio nella console
if (EMAIL_DEL_UTENTE === "") {
    console.log('Perchè non hai inserito una EMAIL quando te l\'ho chiesto?');
}
// SE la lunghezza stringa del prompt e minore della lunghezza chiesta, manda un messaggio nella console
else if(EMAIL_DEL_UTENTE.length < CARRATTERI_MINIMI.length){
    console.log('Questa non è una EMAIL. E troppo corta per essere una EMAIL');
}
else {
    // *controlla che sia nella lista di chi può accedere
    for (let i = 0; i < EMAIL_ARRAY.length; i++) {
        // SE dentro alla lista si trova una stringa = alla stringa del utente:
        if (EMAIL_ARRAY[i] === EMAIL_DEL_UTENTE) {
            // transformiamo la variabile in vera
            seiNellaLista = true;
        }
    }

    // *stampa un messaggio appropriato sull’esito del controllo
    if (seiNellaLista) {
        console.log('La tua EMAIL si trova della Lista di chi può accedere');
    } else {
        console.log('Mi DISPIACE, ma la tua EMAIL non si trova nella Lista');
    }
    // *(non usare includes())
}
