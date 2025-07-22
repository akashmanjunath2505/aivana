(() => {
    /**
     * Initializes Intersection Observer for elements that animate on scroll.
     */
    const initScrollAnimations = () => {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        if (animatedElements.length === 0) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        animatedElements.forEach(el => observer.observe(el));
    };

    /**
     * Initializes the FAQ accordion functionality.
     */
    const initFaqAccordion = () => {
        const faqItems = document.querySelectorAll('.faq-item');
        if (faqItems.length === 0) return;

        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question') as HTMLButtonElement;
            const answer = item.querySelector('.faq-answer') as HTMLDivElement;

            if (question && answer) {
                question.addEventListener('click', () => {
                    const isExpanded = question.getAttribute('aria-expanded') === 'true';
                    
                    // Close all other items
                    faqItems.forEach(otherItem => {
                        const otherQuestion = otherItem.querySelector('.faq-question') as HTMLButtonElement;
                        const otherAnswer = otherItem.querySelector('.faq-answer') as HTMLDivElement;
                        if (otherQuestion !== question) {
                             otherQuestion.setAttribute('aria-expanded', 'false');
                             otherAnswer.style.maxHeight = '0px';
                        }
                    });

                    // Toggle the clicked item
                    if (isExpanded) {
                        question.setAttribute('aria-expanded', 'false');
                        answer.style.maxHeight = '0px';
                    } else {
                        question.setAttribute('aria-expanded', 'true');
                        answer.style.maxHeight = answer.scrollHeight + "px";
                    }
                });
            }
        });
    };

    /**
     * Initializes the contact form submission handler.
     */
    const initContactForm = () => {
        const contactForm = document.getElementById('contact-form') as HTMLFormElement;
        const formStatus = document.getElementById('form-status') as HTMLDivElement;

        if (!contactForm || !formStatus) return;

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitButton = contactForm.querySelector('button[type="submit"]') as HTMLButtonElement;
            
            if (!submitButton) return;

            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            formStatus.textContent = '';
            formStatus.style.color = 'var(--text-muted-color)';

            setTimeout(() => {
                contactForm.reset();
                submitButton.disabled = false;
                submitButton.textContent = 'Send Message';
                formStatus.textContent = 'Thank you! Your message has been sent.';
                formStatus.style.color = 'var(--primary-color)';

                setTimeout(() => {
                    formStatus.textContent = '';
                }, 5000);
            }, 1500);
        });
    };

    /**
     * Initializes the countdown timer.
     */
    const initCountdownTimer = () => {
        const countdownElement = document.getElementById('countdown-timer');
        if (!countdownElement) return;

        const endDate = new Date('Aug 15, 2025 00:00:00').getTime();

        const updateTimer = () => {
            const now = new Date().getTime();
            const distance = endDate - now;

            if (distance < 0) {
                countdownElement.innerHTML = "<p>This offer has expired.</p>";
                clearInterval(timerInterval);
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            (document.getElementById('days') as HTMLElement).innerText = String(days).padStart(2, '0');
            (document.getElementById('hours') as HTMLElement).innerText = String(hours).padStart(2, '0');
            (document.getElementById('minutes') as HTMLElement).innerText = String(minutes).padStart(2, '0');
            (document.getElementById('seconds') as HTMLElement).innerText = String(seconds).padStart(2, '0');
        };

        const timerInterval = setInterval(updateTimer, 1000);
        updateTimer(); // Initial call
    };

    /**
     * Initializes animations for the journey page.
     */
    const initJourneyPage = () => {
        const journeyContainer = document.querySelector('.journey-container');
        if (journeyContainer) {
            setTimeout(() => {
                journeyContainer.classList.add('is-visible');
            }, 100);
        }
    };


    /**
     * Runs all initializers on page load.
     */
    document.addEventListener('DOMContentLoaded', () => {
        initScrollAnimations();
        initFaqAccordion();
        initContactForm();
        initCountdownTimer();
        initJourneyPage();
    });

})();
