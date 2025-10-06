const CACHE_NAME = "madhan-portfolio-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/about.html",
  "/education.html",
  "/skills.html",
  "/projects.html",
  "/contact.html",
  "/css/style.css",
  "/js/script.js",
  "/manifest.json",
  "/assets/icon-192.png",
  "/assets/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
