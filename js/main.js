/* Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca.

Formula per il calcolo: km * 0.21 = prezzoBiglietto

Stampare in HTML una lista con età inserita, km inseriti ed il prezzo finale
eta: 50
km: 120
prezzzo: 24,50

BONUS:
validare/ controllare i dati inseriti
età è un numero?
età è stata inserita
km è un numero valido?
posso inserire un minimo / massimo di km possibili?
*/

// imposto le variabili che utilizzerò
const eta = parseInt(prompt('Quanti anni hai?'));
const km = parseInt(prompt('Quanti chilometri devi percorrere?'));
const price = km*0.21;
let finalPrice = price;

// imposto le condizioni

if (isNaN(eta) || isNaN(km) || eta < 1){ 
    /* condizione che determina se i dati inseriti sono numeri, quindi validi o meno 
    (in caso di invalidità la pagina mostra un messaggio di errore e poi si ricarica automaticamente)*/
    alert("Valori non validi!");
    location.reload();
} else if (km < 10 || km > 1500){
    /* condizione che determina se i chilometri inseriti sono nel range richiesto, in questo caso tra 10 e 1500
    (se al di fuori del range, la pagina mostra un messaggio di errore e poi si ricarica automaticamente)*/
    alert("I chilometri non possono essere minori di 10 o maggiori di 1500!");
    location.reload();
} else {
    // condizione che applica gli eventuali sconti richiesti, altrimenti restituisce il prezzo così com'è
    if (eta < 18){
        finalPrice = (price*0.8);
    } else if (eta > 65){
        finalPrice = (price*0.6);
    } 
}

// stampa sul documento HTML

document.getElementById("eta").innerHTML= eta.toString();
document.getElementById("km").innerHTML= km.toString();
document.getElementById("price").innerHTML= finalPrice.toFixed(2);