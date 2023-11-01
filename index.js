function goToTheNextSection(number) {

    window.scrollTo(0,window.screen.height * 0.85 * (number + 1));
}

function addEventToBtns() {
    const downButtons = document.querySelectorAll('.down-arrow');

    downButtons.forEach((btn, i) => btn.addEventListener('click',() =>  goToTheNextSection(i)));
}

window.onload = addEventToBtns;
