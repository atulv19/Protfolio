//====================toggle section ==============================//

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Java.js

document.getElementById('menu-icon').addEventListener('click', function () {
    document.getElementById('navbar').classList.toggle('active');
});


document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.getElementById('navbar');

    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        if (!navbar.contains(event.target) && !menuIcon.contains(event.target)) {
            navbar.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
});



//========================scroll section ======================/

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    section.forEach(sec => {
        let topv= windo.scrollY;
        let offset = sec.offsetTop -150;
        let hight = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + hight){
            navLinks.forEach.apply(links =>{
                links.classList.remove('acitive');
                document.querySelector('header nav a[href*=' +id + ']').classList.add('active');
            });
        };
    });

    /*==========================stricky navbar ================================================*/

let header = document.querySelector('header');
header.classList.toggle('sticky' , windi.scrollY > 100);

/*==============================remove toggle icon and navbar ==========================*/

menuIcon.classList.remove('fa-xamark');
navbar.classList.remove('active');
};


/*==============================remove toggle icon and navbar ==========================*/


// Initialize ScrollReveal with global configuration
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

// Reveal elements with specific configurations
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .content form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*=============================type js ==========================*/

const typed = new Typed('.multiple-text', {
    strings: ['Computer Science Student','Full Stack Developer',],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});