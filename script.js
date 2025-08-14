// script.js
document.querySelectorAll('.text-btn p').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Плавна прокрутка до елемента
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
