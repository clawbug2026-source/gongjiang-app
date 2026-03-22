const CACHE = 'gj-v3';
const CORE = ['/', '/index.html', '/manifest.json'];

self.addEventListener('install', ev => {
  self.skipWaiting();
  ev.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE).catch(()=>{})));
});
self.addEventListener('activate', ev => {
  ev.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))
    )
  );
  self.clients.claim();
});
self.addEventListener('fetch', ev => {
  ev.respondWith(
    caches.match(ev.request).then(cached => {
      if (cached) return cached;
      return fetch(ev.request).then(resp => {
        if (resp && resp.status===200) {
          caches.open(CACHE).then(c => c.put(ev.request, resp.clone()));
        }
        return resp;
      }).catch(() => caches.match('/index.html'));
    })
  );
});
