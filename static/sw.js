// Self-destroying service worker.
// The old Gatsby site (gatsby-plugin-offline) registered a service worker at this URL
// in visitors' browsers. This replacement unregisters it and clears its caches so
// returning visitors get the live site instead of the stale offline-cached one.
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches
      .keys()
      .then(keys => Promise.all(keys.map(key => caches.delete(key))))
      .then(() => self.registration.unregister())
      .then(() => self.clients.matchAll({ type: 'window' }))
      .then(clients => clients.forEach(client => client.navigate(client.url))),
  );
});
