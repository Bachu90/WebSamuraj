const addInput = document.querySelector("form");
const searchBox = document.querySelector("input.searchBox");
const taskCounter = document.querySelector("h1 span");
const ul = document.querySelector("ul");

let db = [];

function addTask(e) {
    e.preventDefault();
    if (!addInput.querySelector("input:first-child").value) return;
    db.push(e.target.querySelector("input:first-child").value);
    addInput.querySelector("input:first-child").value = "";
    renderList(db);
}

function removeTask(e) {
    let key = e.target.parentNode.dataset.key;
    db.splice(key, 1);
    renderList(db);
}

function searchTask(e) {
    let list = db.filter(function (item) {
        return item.toLowerCase().includes(e.target.value.toLowerCase());
    });
    renderList(list);
}

function renderList(database) {
    ul.textContent = "";
    database.forEach(function (item, index) {
        let li = document.createElement("li");
        li.dataset.key = index;
        li.innerHTML = `${item} <button class="delete">Usuń</button>`
        ul.appendChild(li);
    });
    document.querySelectorAll(".delete").forEach(btn => {
        btn.addEventListener("click", removeTask);
    })
    taskCounter.textContent = database.length;
}

addInput.addEventListener("submit", addTask);
searchBox.addEventListener("input", searchTask);