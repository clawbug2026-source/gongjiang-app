const CACHE_NAME = 'gongjiang-v2';
const ASSETS = ['./index.html', './manifest.json'];

self.addEventListener('install', ev => {
  self.skipWaiting();
  ev.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS).catch(()=>{})));
});

self.addEventListener('activate', ev => {
  ev.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', ev => {
  ev.respondWith(
    caches.match(ev.request).then(cached => {
      if (cached) return cached;
      return fetch(ev.request).then(resp => {
        if (resp && resp.status === 200) {
          caches.open(CACHE_NAME).then(c => c.put(ev.request, resp.clone()));
        }
        return resp;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
