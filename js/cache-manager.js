class CacheManager {
    constructor() {
        this.version = '1.0.0';
        this.cacheName = 'studio-110-cache-v1';
        this.resourcesToCache = [
            '/',
            '/index.html',
            '/css/normalize.css',
            '/css/main.css',
            '/css/animations.css',
            '/css/loader.css',
            '/js/main.js',
            '/js/animations.js',
            '/js/loader.js',
            'https://unpkg.com/@lottiefiles/lottie-player@2.0.8/dist/lottie-player.js',
            'https://lottie.host/8935ab8d-1a79-459f-bca9-7d1477e00bae/8SWmpiUCaY.json'
        ];
    }

    async init() {
        try {
            // Register service worker
            if ('serviceWorker' in navigator) {
                const registration = await navigator.serviceWorker.register('/service-worker.js');
                console.log('ServiceWorker registered:', registration);
            }

            // Initialize cache
            await this.initCache();
            
            // Preload resources
            await this.preloadResources();
        } catch (error) {
            console.error('Cache initialization failed:', error);
        }
    }

    async initCache() {
        if ('caches' in window) {
            try {
                const cache = await caches.open(this.cacheName);
                await cache.addAll(this.resourcesToCache);
                console.log('Resources cached successfully');
            } catch (error) {
                console.error('Caching failed:', error);
            }
        }
    }

    async preloadResources() {
        const preloadPromises = this.resourcesToCache.map(async (url) => {
            try {
                const response = await fetch(url, { cache: 'force-cache' });
                return response;
            } catch (error) {
                console.warn(`Failed to preload: ${url}`, error);
            }
        });

        await Promise.all(preloadPromises);
    }

    async clearCache() {
        if ('caches' in window) {
            try {
                await caches.delete(this.cacheName);
                console.log('Cache cleared successfully');
            } catch (error) {
                console.error('Failed to clear cache:', error);
            }
        }
    }
}

// Initialize cache manager
const cacheManager = new CacheManager();
cacheManager.init();
