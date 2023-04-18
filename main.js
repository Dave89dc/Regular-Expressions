// ESPRESSIONI REGOLARI:


let reg1 = new RegExp('abc');
let reg2 = /abc/;

console.log(/abc/.test('abcde')); // ==> true
console.log(/abc/.test('zzxzxzabc')); // ==> true
console.log(/abc/.test('abxde')); // ==> false
console.log(/abc/.test('abfgchr')); // ==> false

console.log(/[0123456789]/.test('in 1992')); // ==> true (le quadre permettono, a differenza di prima,
                                            //  di chiedere se almeno uno dei caratteri presenti nelle quadre
                                            //  è presente nella stringa testata).
console.log(/[0-9]/.test('in 1992')); // ==> true (è la stessa cosa, in trattino è l'abbreviazione che intende
                                        // anche i caratteri che sono in mezzo alle cifre).

console.log(/[a-e][q-z]/.test('pazzo')); // ==> true (si possono mettere più condizioni, ma devono essere entrambe vere, AND!).
console.log(/[a-zA-Z]/.test('U')); // ==> true (mettendo condizioni diverse all'interno di una sola quadra la condizione diventa un OR).

// Esistono dei caratteri che semplificano la sintassi:

// \d ==> dal 0 al 9:

console.log(/\d/.test('in 1992')); // ==> true (d = digit (cifra)).

// \w ==> qualsiasi carattere ALFANUMERICO (sia lettere che numeri):

console.log(/\w/.test('a1_')); // ==> true (cerca lettere, numeri e anche l'underscore).

// \s ==> tutti i caratteri di spaziatura:

console.log(/\s/.test('ciao')); // ==> false
console.log(/\s/.test('ciao mondo')); // ==> true
console.log(/\s/.test('ciao\nmondo')); // ==> true (anche il '\n' (andare a capo)).

// se tutte vengono scritte con la lettera maiuscola funzionano al contrario,
// cioè cercano tutto quello che NON è...

// . ==> qualsiasi cosa che NON sia una nuova stringa, o un andare a capo:

console.log(/./.test('')) // ==> false
console.log(/./.test('\n')) // ==> false

// Esempio di utilizzo:

// let dataTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
let dataTime = /[\d{1,2}\-]{2}\d+ \d{1,2}:\d{2}/;
console.log(dataTime.test('01/30/2003 5:20')); // ==> true
console.log(dataTime.test('30-jan-2003 15:20')); // ==> false

// let expression = /[a-z][a-z][a-z]-[a-z][a-z][a-z][a-z]-[a-z][a-z][a-z]/;
let expression = /[a-z]{3}-[a-z]{4}-[a-z]{3}/; // espressione riassuntiva ({n} moltiplica per n).
console.log(expression.test('sfd-tjrf-igh'));

let dataTime2 = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/; // ^ e $ indicano l'inizio e la fine, la stringa non deve avere niente prima e dopo.
console.log(dataTime2.test('10/03/2023')); // ==> true

// si può evitare in numero massimo con es. [1,] oppure \d+
// \d/* con l'asterisco il carattere può anche non esserci, oppure essercene quanti si vuole
// praticamente è come il +, ma a differenza sua permette anche di omettere il carattere)

// il ? si applica per rendere un carattere opzionale

console.log(/aaa[bc]?a/.test('aaaba')) // ==> true
console.log(/aaa[bc]?a/.test('aaabca')) // ==> false // solo un carattere (tra b e c)
console.log(/aaa[bc]?a/.test('aaaa')) // ==> true

// per avere più caratteri opzionali si può creare con le parentesi tonde un gruppo
// unico di espressione che viene considerato opzionale per intero:

let dataTime3 = /^\d{1,2}\/\d{1,2}\/\d+( [ad]\.c\.)?$/;

console.log(dataTime3.test('1/6/300 d.c.')); // ==> true

let domainPattern = /^\w([a-zA-Z\d]\-*\.?)+(:\d+)?$/;

console.log('domainPattern: ' + domainPattern.test('google.com')); // ==> true
console.log('domainPattern: ' + domainPattern.test('localhost:8080')); // ==> true
console.log('domainPattern: ' + domainPattern.test('english.co.uk:21')); // ==> true
console.log('domainPattern: ' + domainPattern.test('localhost:')) // ==> false
console.log('domainPattern: ' + domainPattern.test('personal-home-page.it')) // ==> true

let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;

console.log(animalCount.test('15 pigs')); // ==> true
console.log(animalCount.test('15 cow')); // ==> true
console.log(animalCount.test('15 pigchicken')); // ==> false

let hoursPattern = /\d{1,2}:\d{2}( (am|pm))?/i; // aggiungendo la i si accetta sia il maiuscolo che il minuscolo
console.log('Hours: ' + hoursPattern.test('3:12 pm')); // ==> true

let binary = /([01]{2})+/;


