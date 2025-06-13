self.addEventListener("install", (e) => {
  console.log("✅ Service Worker: Installed");
  e.waitUntil(
    caches.open("pwa-cache-v1").then((cache) => {
      return cache.addAll([
        "index.html",
        "manifest.json",
        
        
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});

