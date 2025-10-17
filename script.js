document.addEventListener('DOMContentLoaded', function() {
    const navtoggle = document.querySelector('.nav-toggle');
    const navmenu = document.querySelector('.nav-menu');
    const nanToggleIcon = document.querySelector('.nav-toggle-icon');

    navtoggle.addEventListener('click', function() {
        navmenu.classList.toggle('nav-menu_visible');

        nanToggleLines[0].classList.toggle('nav-toggle-line--top--top-active');
        nanToggleLines[1].classList.toggle('nav-toggle-line--middle-active');
        nanToggleLines[2].classList.toggle('nav-toggle-line--bottom--bottom-active');
    });
});