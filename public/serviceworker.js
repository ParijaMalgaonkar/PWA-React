const cacheName = "first"
const cachedURLS = ['index.html', 'offlinePage.html'];

const self = this;


//Installing the Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName)
            .then((cache) => {
                console.log('Opened Cache');
                return cache.addAll(cachedURLS);
            })
    )
});


//Listening for requests
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(() => {
                return fetch(event.request)
                    .catch(() => caches.match('offlinePage.html'))
            })
    )
    
});


//Activating the Service Worker
self.addEventListener('activate', (event) => {
    const cacheWhiteList = [];
    cacheWhiteList.push(cacheName);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.All(
            cacheNames.map((cacheName) => {
                if(!cacheWhiteList.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))
    )
    
});