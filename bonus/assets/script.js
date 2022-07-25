
// *Creare un array con un numero a piacere di elementi.
const ELEMENTI_ARRAY_A_PIACERE = ['mamma', 'papà', 'figlio/a', 'nonno/a', 'nipoti', 'amico/a', 'kebab', 'pizza', 'boh'];

// *Stampare a schermo, con un ciclo, gli ultimi 5 elementi dell’array.
// *Attenzione #1: quanti elementi minimo dovrà contenere l’array?
if(ELEMENTI_ARRAY_A_PIACERE.length >= 5){
    for (let i = 0; i < 5; i++) {
        const ULTIMO = ELEMENTI_ARRAY_A_PIACERE[ELEMENTI_ARRAY_A_PIACERE.length - (i + 1)];
        console.log(ULTIMO);
    }
}
// *Attenzione #2: il ciclo deve essere costruito per estrarre gli ultimi elementi da qualsiasi array, anche se non conosciamo a priori quanti elementi contiene.
