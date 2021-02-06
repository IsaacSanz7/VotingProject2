function togglePopup() {
    document.getElementById("Popup1").classList.toggle("active");
}
function togglePopup2() {
    document.getElementById("Popup2").classList.toggle("active");
}

page.onclick = function (event) {
    let pageCoords = this.getBoundingClientRect();
    console.log(page.clientTop)

    let flagCoords = {
        top: event.clientY - pageCoords.y - page.clientTop - flag.clientHeight / 2,
        left: event.clientX - pageCoords.x - page.clientLeft - flag.clientWidth / 2
    }

    if (flagCoords.top < 0) flagCoords.top = 0
    if (flagCoords.left < 0) flagCoords.left = 0
    if (flagCoords.left + flagCoords.clientWidth > page.clientWidth) flagCoords.left = page.clientWidth - flag.clientWidth;
    if (flagCoords.left + flagCoords.clientHeight > page.clientWidth) flagCoords.top = page.clientHeight - flag.clientHeight;

    flag.style.left = flagCoords.left + 'px'
    flag.style.top = flagCoords.top + 'px'
}




