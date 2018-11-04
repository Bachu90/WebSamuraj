function addSecond() {
    let seconds = 0;
    return function () {
        seconds++;
        document.body.innerHTML = `<p>${seconds} sekund</p>`;
    }
}

setInterval(addSecond(), 1000);