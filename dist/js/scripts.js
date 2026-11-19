/*!
* Start Bootstrap - TECHNOVA - Soluciones Informáticas v5.0.9 (https://github.com/CESARPRrrr/technova-soluciones-informaticas)
* Copyright 2013-2026 Start Bootstrap
* Licensed under MIT (https://github.com/CESARPRrrr/technova-soluciones-informaticas/blob/master/LICENSE)
*/
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

const contactForm = document.querySelector('#contactForm');

if (contactForm) {
    const formStatus = contactForm.querySelector('#formStatus');
    const submitButton = contactForm.querySelector('button[type="submit"]');

    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        if (!contactForm.reportValidity()) {
            return;
        }

        submitButton.disabled = true;
        formStatus.textContent = 'Enviando mensaje…';

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: { Accept: 'application/json' }
            });

            if (!response.ok) {
                formStatus.textContent =
                    'No se pudo enviar el mensaje. Inténtalo de nuevo más tarde.';
                return;
            }

            contactForm.reset();
            formStatus.textContent = 'Tu mensaje se envió correctamente. Gracias por contactarnos.';
        } catch {
            formStatus.textContent =
                'No se pudo conectar para enviar el mensaje. Revisa tu conexión e inténtalo de nuevo.';
        } finally {
            submitButton.disabled = false;
        }
    });
}