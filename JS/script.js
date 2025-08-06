/* ===========================================================================ACTIVE NAVBAR=====================================================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



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






};

/* =========================================================================== scroll reveal =====================================================*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
}); 

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/* =========================================================================== typed js =====================================================*/
const typed = new Typed('.multiple-text', { strings : ['Software Developer', 'Web Developer', 'UI/UX Designer'],
    typeSpeed: 100, backSpeed: 100, backDelay: 1000, loop: true
});

const typed2 = new Typed('.multiple-text2', { strings : ['Software Developer', 'Web Developer', 'UI/UX Designer'],
    typeSpeed: 100, backSpeed: 100, backDelay: 1000, loop: true
});

/* =========================================================================== email js =====================================================*/
 const form = document.querySelector('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        const name = form.elements['name'].value;
        const email = form.elements['email'].value;
        const phone = form.elements['phone'].value;
        const subject = form.elements['_subject'].value;
        const message = form.elements['message'].value;

        if(name.length < 2) {
            alert("Please enter a valid name.");
            return;
        }  

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        const phoneRegex = /^\d{10}$/;
        if(phone.length < 10 || !phoneRegex.test(phone)) {
            alert("Please enter a valid phone number.");
            return;
        }
        if(subject.length < 1) {
            alert("Please enter a valid subject.");
            return;
        }
        if(message.length == 0 )  {
            alert("Please enter a valid message.");
            return;
        }

        // If all validations pass, submit the form
        const FormData = new FormData(form);
        fetch('https://formsubmit.co/dom.burns@mindofdom.info', {
            method: 'POST',
            body: FormData,
        })
        .then(response => {
            if (response.ok) {
                alert("Message sent successfully!");
                form.reset(); // Reset the form after successful submission
            } else {
                alert("There was an error sending your message. Please try again later.");
            }
        }).catch(error => {
            console.error('Error:', error);
            alert("There was an error sending your message. Please try again later.");
        });
    });

        