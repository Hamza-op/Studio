// 3D Card Effect
class Card3D {
    constructor(elements) {
        this.cards = document.querySelectorAll(elements);
        this.boundHandleMouseMove = this.handleMouseMove.bind(this);
        this.boundHandleMouseLeave = this.handleMouseLeave.bind(this);
        this.init();
    }

    init() {
        this.cards.forEach(card => {
            card.addEventListener('mousemove', this.boundHandleMouseMove);
            card.addEventListener('mouseleave', this.boundHandleMouseLeave);
        });
    }

    handleMouseMove(e) {
        const card = e.currentTarget;
        requestAnimationFrame(() => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = -(x - centerX) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
        });
    }

    handleMouseLeave(e) {
        const card = e.currentTarget;
        requestAnimationFrame(() => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    }

    destroy() {
        this.cards.forEach(card => {
            card.removeEventListener('mousemove', this.boundHandleMouseMove);
            card.removeEventListener('mouseleave', this.boundHandleMouseLeave);
        });
    }
}

// Entrance Animations with Intersection Observer
class EntranceAnimations {
    constructor() {
        this.observer = null;
        this.init();
    }

    init() {
        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        requestAnimationFrame(() => {
                            entry.target.classList.add('fade-in');
                        });
                        this.observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '50px'
            }
        );

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            this.observer.observe(el);
        });
    }

    destroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}

// Initialize animations with performance optimizations
function initializeAnimations() {
    // Initialize animated background
    const bg = document.createElement('div');
    bg.className = 'animated-bg';
    document.body.insertBefore(bg, document.body.firstChild);

    // Initialize animations with performance optimizations
    const card3D = new Card3D('.work-grid > *');
    const entranceAnimations = new EntranceAnimations();

    // Add animation classes efficiently
    requestAnimationFrame(() => {
        document.querySelectorAll('.work-grid > *').forEach(item => {
            item.classList.add('hover-lift', 'card-3d');
        });

        document.querySelectorAll('.nav-item, .social-link').forEach(item => {
            item.classList.add('hover-scale');
        });
    });

    // Cleanup function
    return () => {
        card3D.destroy();
        entranceAnimations.destroy();
    };
}

document.addEventListener('DOMContentLoaded', () => {
    initializeAnimations();
});
