let solutions = ['nie potrafię Ci pomóc'];
const input = document.querySelector("input");

document.querySelector(".add").addEventListener("click", function (e) {
    e.preventDefault();
    if (input.value.length) {
        solutions.push(input.value);
        alert("Dodałeś opcję: " + input.value);
        input.value = "";
    } else {
        alert("Uzupełnij puste pole!");
    }
});

document.querySelector(".clean").addEventListener("click", function (e) {
    e.preventDefault();
    if (confirm("Czy na pewno chcesz zresetować bazę możliwości?")) {
        solutions = ['nie potrafię Ci pomóc'];
        alert("Baza zresetowana");
    }
})

document.querySelector(".showOptions").addEventListener("click", function (e) {
    e.preventDefault();
    alert("Dostępne możliwości to: " + solutions);
})

document.querySelector(".showAdvice").addEventListener("click", function () {
    document.querySelector("h1").textContent = solutions[Math.floor(Math.random() * solutions.length)];
})