
(() => {
    // --- INTERSECTION OBSERVER FOR SCROLL ANIMATIONS ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

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


    // --- FAQ ACCORDION ---
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question') as HTMLButtonElement;
        const answer = item.querySelector('.faq-answer') as HTMLDivElement;

        if (question && answer) {
            question.addEventListener('click', () => {
                const isExpanded = question.getAttribute('aria-expanded') === 'true';
                
                // Close all items first for a classic accordion feel
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
})();
