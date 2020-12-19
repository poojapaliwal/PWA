self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('fox-store').then(function(cache) {
        return cache.addAll([
          './',
          './index.html',
          './index.js',
          './style.css',
          './images/logo1.png',
          './images/logo2.png',
          './images/icon.png'
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