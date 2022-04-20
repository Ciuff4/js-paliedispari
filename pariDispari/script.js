/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Bonus: L’inserimento avviene tramite un campo input*/

let pariDispari= prompt("pari o dispari?");
console.log(pariDispari);
let randomPlayer=parseInt(prompt("Inserisci un numero:"));
console.log("player",randomPlayer);

let randomComputer= getRandomNumber(1,5);
console.log( "computer",randomComputer);

let somma= sum(randomPlayer,randomComputer)
console.log("somma",somma);

let risultato="pari";

if (isPari(somma)) {
    risultato="pari";
    console.log("è pari");
}else{
    risultato="dispari";
    console.log("è dispari");
}


if(pariDispari===risultato){
    console.log("player wins");
}else{
    console.log("computer wins");
}



function isPari(num) {
    if (num % 2) {
        return false
    }
    return true
}

function sum(num1,num2) {
    return num1+num2;
}

function getRandomNumber(min, max){

    return  Math.floor(Math.random() * (max - min +1) + min );
}