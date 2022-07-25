
// *Creare un array con un numero a piacere di elementi.
let ELEMENTI_ARRAY_A_PIACERE = [];

let numero_generatore_del_array = parseInt(prompt('Quanti numeri deve avere la tua array generata?'));
let estrazione = parseInt(prompt('Adesso, inserisci quanti numeri dal fondo vuoi estrare'));

// *Stampare a schermo, con un ciclo, gli ultimi 5 elementi dell’array.
// *Attenzione #1: quanti elementi minimo dovrà contenere l’array?
// SE il valore e nullo, manda alla console la problemma
if(isNaN(numero_generatore_del_array)){
    console.log('Attenzione: Quello che hai inserito nella schermata di numeri per la generazione del array non e andato a buon fine');
}

// SE il valore e nullo, manda alla console la problemma
if(isNaN(estrazione)){
    console.log('Attenzione: Quello che hai inserito nella shermata per l\'estrazione non e andato a buon fine');
}

// SE i valori sono diverse da NAN di entranbe variabili:
if(!isNaN(numero_generatore_del_array) && !isNaN(estrazione)){
    // Manda alla console il valore del utente
    console.log(`La tua array e stata creata da ${numero_generatore_del_array} elementi`);
    
    // un ciclo for per inserire dentro i numeri randomici, con la quantita di elementi desiderato dal utente
    for (let i = 0; i < numero_generatore_del_array; i++) {
        // usiamo push per l'inserimento dei numeri randimici interi
        ELEMENTI_ARRAY_A_PIACERE.push(Math.floor(Math.random() * 100));  
    }

    // visualiziamo alla console la lista array creata
    console.log(ELEMENTI_ARRAY_A_PIACERE);
    console.log('Hai deciso di estrare ' + estrazione);

    // manteniamoci nel limite di 5
    if(ELEMENTI_ARRAY_A_PIACERE.length >= estrazione){
        for (let i = 0; i < estrazione; i++) {
            const ULTIMO = ELEMENTI_ARRAY_A_PIACERE[ELEMENTI_ARRAY_A_PIACERE.length - (i + 1)];
            console.log((i + 1) + ' => ' + ULTIMO);
        }
    }else {
        console.log(`L'array creata non ha abbastanza elementi per estrare ${estrazione} elementi dal fondo del array`);
    }
}
// *Attenzione #2: il ciclo deve essere costruito per estrarre gli ultimi elementi da qualsiasi array, anche se non conosciamo a priori quanti elementi contiene.
