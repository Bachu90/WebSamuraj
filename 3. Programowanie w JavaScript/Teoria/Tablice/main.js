// TABLICA - ARRAY

// Co trzeba wiedzieć o tablicy
// -- jest to obiekt wbudowany (ma więc właściwości i metody) 
// -- posiada uporządkową (kolejność jest ważna) zbiór wartości
// -- każda przechowywana wartość w tablicy ma swój indeks. Pierwsza wartość ma indeks 0



// TWORZENIE TABLICY

// Literał tablicy z podaniem zawartości

const nameList = ["Ludomir", "Żyrosław", "Gniewomir", "Myślimir"];

// Literał pustej tablicy a potem uzupełnienie za pomocą odwołania się do indeksu
const cityList = [];
cityList[0] = 'Konin';
cityList[1] = 'Zabrze';

// Konstruktor - pusta tablica
const items = [];
const gameItems = new Array();
// Konstruktor z uzupełnianonymi elementami
const colors = new Array("red", "blue");
colors[2] = "green";


// W każdym z tych sposobów powstaje instacja Tablicy o tych samych właściwościach i metodach (co widzimy po konstruktorze).
// console.log(typeof nameList);
// console.log(nameList);
// console.log(typeof colors);
// console.log(colors);


// Pamietajmy, że możemy edytować tablicę nawet jeśli jest ona przypisana do zmiennej const. Najczęściej więc wybierzemy dla tablicy zmienną const. Nie możemy jednak nic innego przypisać do tej zmiennej
const myArrayConst = [];
let myArrayLet = [];

myArrayConst[0] = "pierwszy const";
myArrayLet[0] = "pierwszy let";
// myArrayConst = "coś innego";
// myArrayLet = "coś innego";



// CO MOŻE ZAWIERAĆ TABLICA
// Każdą inną wartośc

const differentValues = ["string", 20, {}, ["jeden", "dwa"], null]


// ODWOŁANIE DO ELEMENTÓW TABLICY
// używamy indeksu. Indeks od zera i w nawiasach kwadratowych
// console.log(nameList[1]);
const popularName = nameList[2];
// nameList[4] = "Witomysł";
// nameList[2] === "Gniewomir";


// TWORZENIE NOWYCH ELEMENTÓW I MODYFIKOWANIE ISTNIEJĄCYCH W TABLICY
// Za pomocą indeksu, przypisujemy wartość (jeśli dany indeks isteniej to zamieniamy)
// nameList[5] = "Nowe imię";



// USUWANIE ELEMENTÓW Z TABLICY
// delete zastępuję wartość aktualną wartością undefined. Nie zmienia więc wielkości tablioct
delete nameList[2];
typeof nameList[2];  //"undefined"
// Są metody, które mogą usunąć element i usunać też indeks (a więc skrócić tablicę)



// DŁUGOŚĆ TABLICY - WŁAŚCIWOŚĆ LENGTH
const cities = ["Poznań", "Kraków", "Berlin", "Londyn", "Nowy Jork", "Warszawa"];
cities.length;

const users = ["Adam", "Ania"];
users.length;


// WYKORZYSTANIE DŁUGOŚCI TABLICY
// szybkie tworzenie długiej tablicy
const longArray = [];
longArray.length = 100;

// odwołanie się do ostatniego elementy
cities[cities.length - 1];

// dodanie kolejnego elementu (jako ostatniego)
cities[cities.length] = "Tokio";
cities[cities.length] = "Pekin";

// powiększenie, zmniejszenie, wyzerowanie tablicy
// users.length = 20;
cities.length += 2;
// cities.length = cities.length + 2;
// cities.length = 3;
users.length = 0; //i tablica pusta


// SPRAWDZENIE CZY TO JEST TABLICA

typeof users; //'object'

cities instanceof String;
cities instanceof Array;
cities instanceof Object;
cities instanceof Function;

Array.isArray(cities);


// DEREFERENCJA OBIEKTU (NIE TYLKO TABLICY)

let letters = ["a", "d"]
let characters = letters; //ta sama tablica, obie zmienne mają tylko referencje (link do tablicy)

// Tablica (i inny obiekt) zostanie usunięta jeśli nie ma do niej referencji;
// letters = null;
// characters = null;
letters = characters = null;


// CIEKAWOSTKA - stworzenie wielu zmiennych w oparciu o zawartość tablicy (i obiektu)
// Destructuring Arrays - Przypisanie destrukturyzujące 
// Wykorzystujemy tablicę do tworzenia nowych zmiennych.

const [nameUser, idUser, ageUser] = ["Sławoj", 210, 54];

const game = [120.12, 87, "dobry wujek"];

let [time, points, name] = game;

// TABLICA - METODY

const italianUsers = ["Giovanni", "Michele", "Angelo", "Luigi", "Valentina", "Marco"];
// console.log(italianUsers);



// PODSTAWOWE METODA, KTÓRE TRZEBA ZNAĆ


// PUSH - dodaj element na końcu tablicy

// italianUsers.push("Alessandra");
// console.log(italianUsers);



// UNSHIFT - dodaj element na początku tablicy

// italianUsers.unshift("Tommaso");
// console.log(italianUsers);



// POP - Usuń ostatni element tablicy
// Usunięcie wartości i indeksu (nie tylko wartości)

// const deletedUser = italianUsers.pop()
// console.log(italianUsers);

// delete italianUsers[italianUsers.length - 1] //zmiana wartości ostatniego  na udenfined

/* ---------------------------------  */

// SHIFT - Usuń pierwszy element
// Usunięcie wartości i indeksu (nie tylko wartości)

// italianUsers.shift();
// italianUsers.shift();
// console.log(italianUsers);
// delete italianUsers[0] //zmiana wartości pierwszego na udenfined

// CO ZWRACAJĄ TE METODY (BO OPRÓCZ TEGO, ŻE COŚ ROBIĄ /POWYŻEJ/ TO COŚ ZWRACAJĄ)

// const removedLastElement = italianUsers.pop(); //metoda zwraca element (ostatni element tablicy), który został usunięty

// const removedFirstElement = italianUsers.shift(); //metoda zwraca element (pierwszy element tablicy), który został usunięty.

const lengthArrayAfterPush = italianUsers.push("Vito"); //metoda zwraca długoś tablicy jaką ma tablica po jej wykonaniu
const lengthArrayAfterUnshift = italianUsers.unshift("Apollonia"); //też zwraca długoś po dodaniu


/* ------------------------------------ */

// METODA CONCAT
// łączenie tablic. W istocie nie tyle łaczy dwie (czy więcej) tablic, a na ich podstawie tworzy nową

const redColors = ["czerwony", "zachodzącego słońca", "krwisty"];
const greenColors = ["zielony", "trawiasty", "zielony banan"];

// const redAndGreenColors = redColors.concat(greenColors);
const redGreenBlueColors = redColors.concat(greenColors, ["morski"]);

// Inny, nowy sposób (od ES6) to operator spread (operator rozwijania, operator trzech kropek)
const colorsCollections = [...redColors, ...greenColors]; //elementy tablicy są pojedyńczo wyjęte.
// ...redColors  - "czerwony", "zachodzącego słońca", "krwisty"

const colorsCollections2 = [...redColors, ...greenColors, "morski"];


/* -------------------------------- */
const items = ["zad", "bza", "wus", "xad", "coe", "mer", "tve"]

// METODA SLICE
// zwraca nową tablicę, która składa się z części tablicy na której jest wykownywany. Jeśli damy tylko jeden argument, to będzie zwracała od tego elementu (od tego indexu) do końca
items.slice(3);
// drugi argument mówi, do którego elementu (index), ale bez tego elementy
items.slice(2, 3);
// a tak jak poniżej mozemy pobrać całą tablicę
// items.slice(0, items.length);
// lub
// const newItems = items.slice(0);

// Jeśli użyjemy minusa to mówimy ile od końca mamy zwrócić, w przykłądzie poniżej będzie tylko ostatni element
items.slice(-1);

//! Pamiętajmy, że slice nie wpływa na tablicę na której jest wykonywany, więc najczesciej przypiszemy zwróconą wartość do nowej zmiennej

const newItems = items.slice(0, 3); //trzy pierwsze elementy

/* -------------------------------- */


// METODA SPLICE
// Przykład metody destrukcyjnej (destructive method, mutating method - zmianiają tablicę na której są wywyoływane)
// Ta metoda zmienia tablice (modyfikuje) na której jest wykonywana
const animals = ["dog", "cat", "canary", "mouse"];
// animals.splice(1, 2); //od indeksu pierwszego (czyli 2 element) usuń 2 elementy.
// animals.splice(2); //usunie wszystkie elmenty od index 2, łącznie z nim element (usunie index-y, a więc zmniejszy długość tablicy)
// animals.splice(0); //wyzeruje całą tablicę


// Metoda splice umożliwia nam też zastąpienie usunietych elementów

// animals.splice(3, 1, 'hamster');
// animals.splice(0, 2, 'fishes', 'snake');

// Umożliwia nam też dodawanie nowych elementów

// animals.splice(2, 0, "rat");
// animals.splice(0, 0, "horse", "pig", "donkey");

// BARDZO WAŻNE. Metod splice nie tylko wykonuje operacje na tablicy (zmienie ją), ale też zwraca wartości, kóre usuwa w formie tablicy. Więc to co usunięmy możemy wykorzystać.

// const pets = animals.splice(0, 3);



/* -------------------------------- */

// METODA SORT
//metoda destrukcyjna
["Marek", "Zenek", "Arek"].sort();
// animals.sort();

/* -------------------------------- */

// METODA INDEXOF
// szuka takiego elementu w tablicy, jeśli znajdzie zwraca index tego elementu, jeśli nie zwraca -1;
animals.indexOf('canary');
["Arek", 22, null, 22].indexOf(22);
["Arek", 22, null, 22].lastIndexOf(22);
["Arek", 22, null, 22].indexOf("Are"); //-1


/* -------------------------------- */

// METODA INCLUDES
animals.includes("rat");
animals.includes("canary");
[20, 22, 120, 120].includes("22"); //false
[20, 22, 120, 120].includes(120); //true


/* -------------------------------- */

// METODA JOIN
// Tworzy stringa z elementów, domyślnie oddzielonych przecinkiem. Możemy to jednak zmienić.
items.join(); //string oddzielony przeciwnikem
items.join(" --- ");
//w "przyjaznym" państwie można z automatu dodawać bonusy 
items.join(" - 10 lat w obozie pracy; \n ");

/* -------------------------------- */

// METODA REVERSE
//metoda destrukcyjna
//odwraca kolejność

// items.reverse();
["a", 3, "z", "koniec"].reverse();


/* -------------------------------- */

/* -------------------------------- */


//METODA SPLIT, KTÓRĄ MOŻNA WYKONAĆ NA STRING, A TWORZY TABLICĘ
const letters = "Marek Adam Justyna Teresa".split('');

"Marek Adam Justyna Teresa".split(' ');
"Gdańsk,Elbląg,Gdynia,Sopot,Władysławowo,Hel".split(',')
 ;
"Gdańsk, Elbląg, Gdynia, Sopot, Władysławowo, Hel".split(',', 3);
"Gdańsk, Elbląg, Gdynia, Sopot, Władysławowo, Hel".split(', ', 3);

const datesOfBirth = "1967,1982, 1990, 1998, 1976"
datesOfBirth.split(',')