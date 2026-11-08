/* ================================================================= */
/* HPWIZ Travel & Tours - Main JavaScript File                        */
/* Handles Mobile Navigation Toggle & Interactive UI Behavior         */
/* ================================================================= */

document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------
    // Mobile Hamburger Menu Toggle
    // -------------------------------------------------------------
    const hamburger = document.getElementById('hamburgerMenu');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking a navigation link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // -------------------------------------------------------------
    // Contact Form Submission Handler (Client-side interactive feedback)
    // -------------------------------------------------------------
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Collect form data
            const formData = {
                name: document.getElementById('name').value,
                state: document.getElementById('state').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };

            // Simple success alert / UI feedback
            alert(`Thank you, ${formData.name}! Your message has been successfully sent. Our travel management team will reach out to you shortly.`);
            
            // Reset form fields
            contactForm.reset();
        });
    }
});