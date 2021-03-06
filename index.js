//Hamburger Nav
const hamNav = document.querySelector('.ham-nav');
const ham = document.querySelector('.ham');
const menuLinks = document.querySelectorAll('.menuLink');

ham.addEventListener('click', toggleHamburger);

function toggleHamburger() {
    hamNav.classList.toggle('showNav');
    ham.classList.toggle('showClose');
}

menuLinks.forEach(menuLink => menuLink.addEventListener('click', toggleHamburger))

//Nav dissapear on scroll
const body = document.body;
const navbar = document.querySelector('navbar');
const scrollUp = 'scroll-up';
const scrollDown = 'scroll-down';
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
        body.classList.remove(scrollUp);
        return;
    }

    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        body.classList.remove(scrollUp);
        body.classList.add(scrollDown);
    } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
        body.classList.remove(scrollDown);
        body.classList.add(scrollUp);
      }
    lastScroll = currentScroll;
})