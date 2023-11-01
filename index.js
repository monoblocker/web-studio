function goToTheNextSection() {
    console.log("scroll")

    window.scrollBy(0,window.screen.height - 100);
}

function addEventToBtns() {
    const downButtons = document.querySelectorAll('.down-arrow');

    downButtons.forEach(btn => btn.addEventListener('click',  goToTheNextSection));
}

window.onload = addEventToBtns;
