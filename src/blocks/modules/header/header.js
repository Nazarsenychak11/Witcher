const icons = document.querySelectorAll('.icon');
let infoBonus = document.querySelector('.info-bonus');
let witcher = document.querySelector('.witcher');


icons.forEach (icon => {
    icon.addEventListener('click', (event) => {
        icon.classList.toggle("open");
        infoBonus.classList.toggle('show')
        witcher.classList.toggle('hide')
    });
});

