// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'tekst2', 'tekst3']

let txtNumber = 0;
let letterNumber = -15;

// Implementacja
const addLetter = () => {
    console.log(txtNumber + " : " + letterNumber);
    // Użyj w środku setTimeout
    if (letterNumber >= 0) {
        spnText.textContent += txt[txtNumber][letterNumber];
    }
    letterNumber++;
    if (letterNumber === txt[txtNumber].length) {
        if (txtNumber === txt.length - 1) {
            return;
        }
        txtNumber++;
        return setTimeout(() => {
            letterNumber = 0;
            spnText.textContent = "";
            addLetter();
        }, 2000);
    }
    setTimeout(addLetter, 100);
}
addLetter();


// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
    setTimeout(cursorAnimation, 400);
}
setTimeout(cursorAnimation, 400);