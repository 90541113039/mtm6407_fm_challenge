
const navLinks = document.querySelector('.nav-links');
const mobileMenuToggle = document.createElement('button');

mobileMenuToggle.innerText = '☰';
mobileMenuToggle.classList.add('mobile-menu-toggle');

document.querySelector('header').insertBefore(mobileMenuToggle, navLinks);

mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuToggle.classList.toggle('open');
});


document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});
