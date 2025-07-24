/* ===========================================================================ACTIVE NAVBAR=====================================================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



/* ===========================================================================scroll sections active links =====================================================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.clientHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('.header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

/* =========================================================================== stick Navbar =====================================================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
/* =========================================================================== remove nav and active  =====================================================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');



}