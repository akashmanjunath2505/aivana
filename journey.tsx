
(() => {
    // Add class to trigger animations on page load
    document.addEventListener('DOMContentLoaded', () => {
        const journeyContainer = document.querySelector('.journey-container');
        if (journeyContainer) {
            // Use a short timeout to ensure styles are applied before class is added
            setTimeout(() => {
                journeyContainer.classList.add('is-visible');
            }, 100);
        }
    });
})();
