document.addEventListener('DOMContentLoaded', () => {
    // Scroll reveal animation using Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const slideUpElements = document.querySelectorAll('.slide-up');
    slideUpElements.forEach(el => {
        observer.observe(el);
    });
    
    // As cores agora são 100% controladas pelo CSS (Preto, Branco, Cinza Escuro) para manter o visual altamente profissional solicitado.
});
