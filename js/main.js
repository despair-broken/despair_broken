document.addEventListener("DOMContentLoaded", function() {
    const link = document.getElementById("fire-and-ice-link");
    const audio = document.getElementById("buttonSoundJakiro");

    const burgerButton = document.getElementById('burgerButton');
    const menuContainer = document.querySelector('.header__menu-container');

    burgerButton.addEventListener('click', function() {
        menuContainer.classList.toggle('active');
    });

    link.addEventListener("click", function(event) {
        event.preventDefault(); // Предотвращаем действие по умолчанию для ссылки
        audio.play(); // Воспроизводим звук
    });
});
