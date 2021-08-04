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
})


//Listening for requests
self.addEventListener('fetch', (event) => {
    
})


//Activating the Service Worker
self.addEventListener('activate', (event) => {
    
})