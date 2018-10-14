// Projekt 5 - Zadanie dla Ciebie 
// Sprawdź czy wpisane w input hasło pasuje do któegoś z hasel w tablicy. Jeśli tak wyświetl wiadomość w <div>
//wielkość liter nie ma znaczenia (wykorzystaj metodę .toUpperCase lub .toLowerCase - pamiętaj, że metody te działają na pojedyńczym elemencie typu string)

const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"]

const showMessage = (e) => {
    document.querySelector('div').textContent = "";
    passwords.forEach((pass, index) => {
        if (e.target.value.toLowerCase() == pass.toLowerCase()) {
            document.querySelector('div').textContent = messages[index];
            e.target.value = "";
        }
    });
}

input.addEventListener("input", showMessage)