/* CO TO JEST ZAKRES (SCOPE) - WPROWADZENIE */

// Zakres mówi gdzie dana zmienna jest widoczna i gdzie może być wykorzystana.

// Zakres globalny (główny) i zakres lokalny (zakres lokalny tworzy blok lub ciało funkcji).

// W naszym programie (złożonym) istnieje mnóstwo zakresów. Każdy blok, funkcja, towrzy swój zakres. Jeden zakres może być zagnieżdzony w innym zakresie. 

//Zakres jest zależny od tego gdzie dana zmienna znajduje się w kodzie (gdzie została utworzona).


/* ZAKRES GLOBALNY */
// Poza blokami i funkcjami. Przestrzeń najwyższego rzędu.

// var userID = 102;
// const colorID = 5;
// let userAge = 20;

// console.log(userID);
// console.log(colorID);
// console.log(userAge);

// userID = 200;
// colorID = 10;
// userAge = 21;


// console.log(userID);
// console.log(colorID);
// console.log(userAge);

// Zmienne zadeklarowane w zakresie globalnym są widoczne wszędzie w programie (również w innych zakresach)

let userName = "Adam";

function showName() {
    let userName = "Jan";
    userName = "Marysia";
    console.log(userName);
}

// showName()
// console.log(userName);

/* ZAKRES LOKALNY (FUNKCJA) */


// Przykład 1

// Jeśli zakres lokalny tworzony jest przez funkcje to sposób deklaracji nie ma znacznie (istniało przed ES6).

var varFun = "a";
let letFun = "b";
const constFun = "c";


function variablesInFunction() {

    var inFunction = "jestem";
    let varFun = 0;
    // varFun = 4;
    // console.log(varFun);
    // console.log(inFunction);
    // let letFun = 5;
    // const constFun = 6;
    // console.log(funInFun);

    function showVariable() {
        // const constFun = "funkcja w funkcji";
        varFun = "nadpisuje wartość zmiennej z wyższego zakresu";
        let funInFun = "lokalny w lokalnym"
        console.log(varFun);
        console.log(letFun);
        console.log(constFun);
        //Zmienne zadeklarowane w zakresach wyżyszych są widoczne w zakresie zagnieżdzonym (również te zadeklarowane w zakresie globalnym), ale mogą być przysłonięte przez własny zakres (czy kolejny zakres nadrzędny).
    }
    // showVariable();
};

// variablesInFunction();

// showVariable();

// Funkcja tworzy zakres lokalny dla zmiennych zadeklarowanych za pomocą const var i let.

// PRZYKŁAD 2


function calculate(a, b) {
    // const a = a;
    // const b = b;
    let number1 = a;
    let number2 = b;


    function add(x, y) {
        x = 10;
        console.log(x + y)
    }
    add(number1, number2)
}

const firstNumber = 10
// calculate(firstNumber, 3)


// PRZYKŁAD 3

function calculate2(a, b) {
    // const a = a;
    // const b = b;
    const number1 = a;
    const number2 = b;

    add2()

}

function add2() {
    // number2 = 10;
    // const number2 = 10;
    // console.log(number1 + number2)
}

// calculate2(2, 3)

/* ZAKRES LOKALNY (BLOK)  - ZAKRES BLOKOWY*/

// Taki zakres nie istniał przed wprowadznei elet i const (była tylko funkcja), wiec pojawił się w ES6


// Przykład 1 

let var1 = 1;
const var2 = 2;
var var3 = 3;

{
    // let var1 = "wewnętrzne 1";
    // const var2 = "wewnętrzne 2";
    // var var3 = "wewnętrzne 3"
    // console.log(var1);
    // console.log(var2);
    // console.log(var3);
    var1 = "wewnętrzne 1";
    // var2 = "wewnętrzne 2";
    var3 = "wewnętrzne 3";
    const var4 = "coś"
}
// console.log(var1);
// console.log(var2);
// console.log(var3);
// console.log(var4);



// PRZYKŁAD 2

const a = "1 w zakresie globalnym";
let b = "2 w zakresie globalnym";
var c = "3 w zakresie globalnym";

if (true) {
    // console.log(a) // zmienna globalna jest widoczna w bloku.
    // a = "przypisanie do a? Ale którego?"
    const a = "1 w bloku";
    // console.log("a w bloku to:" + a);
    // b = "2 w bloku";
    // console.log("b w bloku to:" + b);
    // var c = "3 w bloku";
}

// console.log(a);
// console.log(c);

// Zakres zmiennej a jej widoczność. Widoczność moze być przysłaniania



// PRZYKŁAD 3

let i = 100;

for (let i = 0; i < 10; i++) {
    // let i = 10;
    // console.log(i);
    // const inFor = "wewnątrz pętli";
    // if (i < 4) {
    // i = 10;
    // let i = 20;
    // inFor = "wewnątrz pętli i wewnątrz instrukcji warunkowej";
    // const inFor = "wewnątrz pętli i wewnątrz instrukcji warunkowej";
    // console.log("i wewnątrz instrukcji warunkowej, w pętli " + i);
    // console.log(inFor);

    // }

}



// PRZYKŁAD 4

// Zakres zagnieżdzony w innym zakresie. Zakres lokalny moze być zagnieżdzony w innym zakresie lokalnym.
// Najpierw sprawdzany jest aktualny zakres, potem wyższy (jeśli jest tak potrzeba). Wreszcie (jeśli dana zmienne nie została odnazleiona) sprawdzony zostanie zakres globalny.

let example1 = "globalna";

if (true) {
    let example2 = "zakres lokalny. dla którego zakresem zewnętrznym jest zakres globalny"



    if (true) {
        let example3 = "zakres lokalny. dla którego zakresem zewnętrznym jest inny zakres lokalny"
        example1 = "nowa wartość";
        console.log(example1);
        console.log(example2);
        console.log(example3);
    }

}


/* CO TO JEST ZAKRES - JESZCZE RAZ */


// Reguły wykorzystania zmiennych podczas wykonywania kodu.

// Zakres to lista wszystkich zadeklarowanych indentyfikatorów (zmienne)możliwych do użycia w danym momencie wykonywania programu.

// Zakres mówi gdzie dana zmienna jest widoczna i gdzie może być wykorzystana.

// Zakres globalny i zakres lokalny (zakres blokowy lub w funkcji).

// W naszym programie (złożonym) istnieje mnóstwo zakresów. Każdy blok, funkcja, towrzy swój zakres. Jeden zakres może być zagnieżdzony w innym zakresie. 

//Zakres jest zależny od tego gdzie dana zmienna znajduje się w kodzie (gdzie została utworzona).

// Zasady szukanie zmiennej:
//  -- najpierw zakres w którym jesteśmy. Póki nie znajdzie przeszukuje do zakresu najwyższego (zakres globalny)
// -- Po znaleznieniu (dopasowaniu) pierwszej pasujacej zmiennej pozostałe nie są już szukane.