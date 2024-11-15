// Sticky Header
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Scroll Animation
const features = document.querySelectorAll('.feature');

function revealFeatures() {
    const triggerBottom = window.innerHeight / 5 * 4;

    features.forEach(feature => {
        const featureTop = feature.getBoundingClientRect().top;

        if (featureTop < triggerBottom) {
            feature.classList.add('active');
        } else {
            feature.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', revealFeatures);
revealFeatures(); // Initial call