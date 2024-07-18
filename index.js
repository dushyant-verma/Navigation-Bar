// const constant keyword , redeclare
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {

    if (window.scrollY > 100) {

        navbar.style.top = '0';
    } else {
        navbar.style.top = '360px';
    }

});
