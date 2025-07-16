
(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const journeyContent = document.querySelector('.journey-content');
        if (journeyContent) {
            // Add a class to trigger the staggered CSS animations
            journeyContent.classList.add('is-visible');
        }
    });
})();
