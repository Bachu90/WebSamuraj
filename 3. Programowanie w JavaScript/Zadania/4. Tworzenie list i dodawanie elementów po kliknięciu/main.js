let size = 10;
let orderElement = 1;

const init = () => {
    // tutaj kod
    const btn = document.createElement("button");
    const btnReset = document.createElement("button");
    btn.textContent = "Dodaj 10 elementów listy";
    btnReset.textContent = "Wyczyść";
    btn.addEventListener("click", createLiElements);
    btnReset.addEventListener("click", clean);
    document.body.appendChild(btn);
    document.body.appendChild(btnReset);
    const list = document.createElement("ul");
    list.style.listStyleType = "none";
    document.body.appendChild(list);
}

const createLiElements = () => {
    // tutaj kod
    for (let i = 0; i < 10; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = `Element nr ${orderElement++}`;
        listItem.style.fontSize = `${size++}px`;
        document.querySelector("ul").appendChild(listItem);
    }
}

const clean = () => {
    document.querySelector("ul").textContent = "";
    size = 10;
    orderElement = 1;
}

init()