const navigationToggle = document.querySelector('.navbar-toggler');
const navigationMenu = document.querySelector('#mainNavigation');

if (navigationToggle && navigationMenu) {
    const setNavigationOpen = (isOpen) => {
        navigationMenu.classList.toggle('show', isOpen);
        navigationToggle.setAttribute('aria-expanded', String(isOpen));
        navigationToggle.setAttribute(
            'aria-label',
            isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'
        );
    };

    navigationToggle.addEventListener('click', () => {
        setNavigationOpen(navigationToggle.getAttribute('aria-expanded') !== 'true');
    });

    navigationMenu.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', () => setNavigationOpen(false));
    });
}