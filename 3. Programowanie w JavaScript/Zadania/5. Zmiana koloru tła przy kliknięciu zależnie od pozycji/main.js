// KOLOR GENEROWANY W ZALEŻNOŚCI OD TEGO GDZIE KLIKNIEMY

// jeśli wartość dla x (event.clientX) i y (event.clientY) jest parzysta (np. 100,122)  to kolor czerwony
// jesli wartość dla x i y jest nieparzysta to kolor niebieski
// jeśli jeden z kolorów jest parzysty a drugi nieparzysty to kolor zielony

document.body.addEventListener("click", function (e) {
    if ((e.clientX % 2 == 0) && (e.clientY % 2 == 0)) {
        document.body.style.backgroundColor = "#f00";
    } else if ((e.clientX % 2 != 0) && (e.clientY % 2 != 0)) {
        document.body.style.backgroundColor = "#00f";
    } else {
        document.body.style.backgroundColor = "#0f0";
    }
    console.log(e.clientX + "," + e.clientY);
});