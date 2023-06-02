const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const polk86 = document.getElementById("polk86");

burger.addEventListener('click', () => {
    menu.classList.toggle('disp');
});

polk86.scrollIntoView({ block: "end" });
