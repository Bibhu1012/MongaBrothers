document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.toggle-btn');
    const navbar = document.querySelector('.navbar');
    const closeBtn = document.querySelector('.close-btn');

    toggleBtn.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    closeBtn.addEventListener('click', function() {
        navbar.classList.remove('active');
    });
});
