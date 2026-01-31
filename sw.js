const CACHE_NAME = 'direct-chat-v3';
const ASSETS = [
    './',
    'index.html',
    'style.css',
    'script.js',
    'manifest.json',
    'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/css/flag-icon.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
    'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap'
];

self.addEventListener('install', (e) => {
    e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
    e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
