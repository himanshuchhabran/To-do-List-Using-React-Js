const clock = document.getElementById("clock")


setInterval(() => {
    let date = new Date();
    date = date.toLocaleTimeString();
    clock.innerHTML = `<span>${date}</span>`;

},1000);