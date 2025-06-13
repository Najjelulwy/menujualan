self.addEventListener("install", (e) => {
  console.log("✅ Service Worker: Installed");
  e.waitUntil(
    caches.open("pwa-cache-v1").then((cache) => {
      return cache.addAll([
        "index.html",
        "manifest.json",
        "icons/icon1.png",
        "icons/icon2.png"
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

