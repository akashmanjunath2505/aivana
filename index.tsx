(() => {
    // --- INTERSECTION OBSERVER FOR SCROLL ANIMATIONS ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Unobserve after the animation has been triggered
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    animatedElements.forEach(el => observer.observe(el));

    // --- CONTACT FORM HANDLING ---
    const contactForm = document.getElementById('contact-form') as HTMLFormElement;
    const formStatus = document.getElementById('form-status') as HTMLDivElement;

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitButton = contactForm.querySelector('button[type="submit"]') as HTMLButtonElement;
            
            if (!submitButton) return;

            // Disable form and show processing message
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            formStatus.textContent = '';
            formStatus.style.color = 'var(--text-muted-color)';

            // Simulate API call
            setTimeout(() => {
                contactForm.reset();
                submitButton.disabled = false;
                submitButton.textContent = 'Send Message';
                formStatus.textContent = 'Thank you! Your message has been sent.';
                formStatus.style.color = 'var(--primary-color)';

                // Clear status message after 5 seconds
                setTimeout(() => {
                    formStatus.textContent = '';
                }, 5000);
            }, 1500);
        });
    }
})();
