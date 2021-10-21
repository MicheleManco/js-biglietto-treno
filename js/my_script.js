// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

let element = document.getElementById("prezzofinale");

// chiedere l'età e i km da percorrere 
let age =parseInt(prompt("Quanti anni hai?"));
if (isNaN(age)) {
    do {
        age = parseInt(prompt("inserisci il numero di anni che hai"));
    } while (isNaN(age));
}

let km = parseInt(prompt("quanti km vuoi percorrere"));
if (isNaN(km)) {
    do {
        km = parseInt(prompt("inserisci il numero dei km che vuoi percorrere"));
    } while (isNaN(km));
}

// capire il prezzo base del biglietto in base ai km (0.21€ al km )
let ticket = km * 0.21 ;
console.log(ticket);

let discount1 = ((20 / 100) * ticket);
console.log(discount1);

let discount2 = ((40 / 100)* ticket);
console.log(discount2);

// sconto del 20% per minori di 18 anni, sconto del 40% per over 65
if (age < 18){
    ticket = ticket - discount1
}else if (age > 65){
    ticket = ticket- discount2
}

element.innerHTML = `Il prezzo è di: ${ticket.toFixed(2)} €`;




