/**************************************
 PASSWORD GENERATOR
 *****************************/

function toggleGen() {
let name = prompt ('Inserisci qui il tuo nome')

let surname = prompt ('Inserisci qui il tuo cognome')

let fav_color = prompt ('Inserisci qui il tuo colore preferito')


document.getElementById("target").innerHTML = name + surname + fav_color + '23'

}