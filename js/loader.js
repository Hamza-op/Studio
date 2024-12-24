class ParticleEffect {
    constructor(container) {
        this.container = container;
        this.particles = [];
        this.maxParticles = 50;
        this.init();
    }

    init() {
        for (let i = 0; i < this.maxParticles; i++) {
            this.createParticle();
        }
    }

    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        this.container.appendChild(particle);
        this.animateParticle(particle);
        this.particles.push(particle);
    }

    animateParticle(particle) {
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        const endX = Math.random() * window.innerWidth;
        const endY = Math.random() * window.innerHeight;
        const duration = 2000 + Math.random() * 3000;
        const delay = Math.random() * 2000;

        particle.style.left = `${startX}px`;
        particle.style.top = `${startY}px`;

        requestAnimationFrame(() => {
            particle.style.transition = `all ${duration}ms ease-out`;
            particle.style.opacity = '0.5';
            
            setTimeout(() => {
                particle.style.transform = `translate(${endX - startX}px, ${endY - startY}px)`;
                particle.style.opacity = '0';
            }, 50);

            setTimeout(() => {
                particle.style.transition = 'none';
                particle.style.transform = 'none';
                this.animateParticle(particle);
            }, duration);
        });
    }

    destroy() {
        this.particles.forEach(particle => particle.remove());
        this.particles = [];
    }
}

class Loader {
    constructor() {
        this.createLoader();
        this.particleEffect = null;
    }

    createLoader() {
        const wrapper = document.createElement('div');
        wrapper.className = 'loader-wrapper';
        
        const particles = document.createElement('div');
        particles.className = 'particles';
        
        const content = document.createElement('div');
        content.className = 'loader-content';
        
        const studioText = document.createElement('div');
        studioText.className = 'studio-text';
        studioText.textContent = 'STUDIO 110';
        
        const lottieContainer = document.createElement('div');
        lottieContainer.className = 'loader-animation';
        
        const lottiePlayer = document.createElement('lottie-player');
        lottiePlayer.src = "https://lottie.host/8935ab8d-1a79-459f-bca9-7d1477e00bae/8SWmpiUCaY.json";
        lottiePlayer.background = "transparent";
        lottiePlayer.speed = "1";
        lottiePlayer.style.width = "300px";
        lottiePlayer.style.height = "300px";
        lottiePlayer.loop = true;
        lottiePlayer.autoplay = true;
        
        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        
        const loadingText = document.createElement('div');
        loadingText.className = 'loader-text';
        loadingText.textContent = 'LOADING';
        
        lottieContainer.appendChild(lottiePlayer);
        content.appendChild(lottieContainer);
        content.appendChild(progressBar);
        content.appendChild(loadingText);
        
        wrapper.appendChild(particles);
        wrapper.appendChild(studioText);
        wrapper.appendChild(content);
        
        document.body.appendChild(wrapper);
        
        this.wrapper = wrapper;
        this.particleEffect = new ParticleEffect(particles);
    }

    show() {
        this.wrapper.classList.remove('fade-out');
    }

    hide() {
        return new Promise(resolve => {
            this.wrapper.classList.add('fade-out');
            setTimeout(() => {
                if (this.particleEffect) {
                    this.particleEffect.destroy();
                }
                this.wrapper.remove();
                resolve();
            }, 500);
        });
    }
}

// Initialize loader
document.addEventListener('DOMContentLoaded', async () => {
    const loader = new Loader();
    
    // Initialize cache manager
    if (typeof cacheManager !== 'undefined') {
        try {
            await cacheManager.init();
        } catch (error) {
            console.warn('Cache initialization failed:', error);
        }
    }
    
    // Hide loader after resources are cached (minimum 2 seconds)
    const minLoadTime = new Promise(resolve => setTimeout(resolve, 2000));
    
    Promise.all([minLoadTime])
        .then(() => {
            loader.hide().then(() => {
                // Initialize other animations after loader is hidden
                if (typeof initializeAnimations === 'function') {
                    initializeAnimations();
                }
            });
        });
});
