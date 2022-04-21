/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Bonus: L’inserimento avviene tramite un campo input*/

const parola= prompt("inserisci una parola:")

const parola2= reverseString(parola);
console.log(parola2);

let message;

if (parola===parola2) {
    message= "la parola è palindroma"
}else{
    message="la parola non è palindroma";
}

console.log(message);

function reverseString(str) {
    for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];  
    }   
    return reversedStr;
}