// Items To Be Cached
const cacheName = "KFettPortfolioV1";
const cacheAssets = [
  "./index.html",
  "./manifest.json",
  "./assets/css/index.css",
  "./assets/css/materialize.min.css",
  "./assets/js/index.js",
  "./assets/js/materialize.min.js",
  "./assets/js/p5.min.js",
  "./assets/images/agarclone.webp",
  "./assets/images/bugtracker.webp",
  "./assets/images/chatbot.webp",
  "./assets/images/code.webp",
  "./assets/images/columbus.webp",
  "./assets/images/me.webp"
];

// Install Event
self.addEventListener("install", e => {
  e.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate Event
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch Event
self.addEventListener("fetch", e => {
  e.respondWith(
    fetch(e.request).catch(() => {
      caches.match(e.request);
    })
  );
});
