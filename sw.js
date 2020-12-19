self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('fox-store').then(function(cache) {
        return cache.addAll([
          '/PWA/',
          '/PWA/index.html',
          '/PWA/index.js',
          '/PWA/style.css',
          '/PWA/images/logo1.jpg',
          '/PWA/images/logo2.jpg'
        ]);
      })
    );
   });
   
   self.addEventListener('fetch', function(e) {
     console.log(e.request.url);
     e.respondWith(
       caches.match(e.request).then(function(response) {
         return response || fetch(e.request);
       })
     );
   });