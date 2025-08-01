const CACHE_NAME = 'student-guide-v4'; // J'ai changé la version pour forcer la mise à jour
const urlsToCache = [
  './',
  'index.html',
  'Cours/index.html',
  'Qcm/index.html',
  'Moyenne/index.html',
  'images/icon-192x192.png',
  'images/icon-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
