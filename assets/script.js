document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Mobile Menu Toggle
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Simple fade-in animation for main content
    const main = document.querySelector('main');
    if(main) {
        main.style.opacity = 0;
        main.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            main.style.opacity = 1;
        }, 100);
    }
});