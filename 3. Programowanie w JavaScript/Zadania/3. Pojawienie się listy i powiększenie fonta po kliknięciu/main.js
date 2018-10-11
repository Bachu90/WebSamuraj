// tutaj rozwiązanie

const btn = document.querySelector("button");
const listItems = document.querySelectorAll("li");
let fSize = 10,
    visible = false;

btn.addEventListener("click", function () {
    if (visible) {
        fSize++;
        listItems.forEach(item => {
            item.style.fontSize = fSize + "px";
        })
    } else {
        listItems.forEach(item => {
            item.style.display = "block";
            item.style.fontSize = fSize + "px";
            visible = true;
        });
    }
});