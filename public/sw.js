const CACHE_NAME = 'image-cache-v1';
const IMAGE_CACHE_NAME = 'images-cache-v1';

// Lista de recursos para precargar
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/styles.css',
  '/main.js'
];

// Instalación del Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(PRECACHE_URLS);
      })
  );
});

// Activación del Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== IMAGE_CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Estrategia de caché para imágenes
self.addEventListener('fetch', (event) => {
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.open(IMAGE_CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            // Si la imagen está en caché, la devolvemos
            return cachedResponse;
          }

          // Si no está en caché, la cargamos de la red
          return fetch(event.request).then((networkResponse) => {
            // Guardamos la imagen en caché para futuras peticiones
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
    );
  }
}); 