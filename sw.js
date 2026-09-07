const CACHE_NAME = 'trakway-trivia-v2.7.0-flat';
const CORE = [
  "./",
  "./index.html",
  "./styles-v27.css",
  "./app-v27.js",
  "./questions.js",
  "./jw-eds-brand-tab.js",
  "./manifest.webmanifest",
  "./version.json",
  "./icon-180.png",
  "./icon-192.png",
  "./icon-512.png",
  "./favicon-16.png",
  "./favicon-32.png",
  "./game-show-badge.png",
  "./team-lion.png",
  "./team-sabre-x.png",
  "./host-ask.png",
  "./host-celebrate.png",
  "./host-correct.png",
  "./host-explain.png",
  "./host-hint.png",
  "./host-think.png",
  "./host-welcome.png",
  "./host-wrong.png",
  "./banter-silence.mp3",
  "./jon-chesterfield-v2-01.mp3",
  "./jon-chesterfield-v2-02.mp3",
  "./jon-chesterfield-v2-03.mp3",
  "./jon-chesterfield-v2-04.mp3",
  "./jon-chesterfield-v2-05.mp3",
  "./jon-chesterfield-v2-06.mp3",
  "./jon-chesterfield-v2-07.mp3",
  "./jon-chesterfield-v2-08.mp3",
  "./jon-chesterfield-v2-09.mp3",
  "./jon-chesterfield-v2-10.mp3",
  "./jon-chesterfield-v2-11.mp3",
  "./jon-chesterfield-v2-12.mp3",
  "./jon-chesterfield-v2-13.mp3",
  "./jon-chesterfield-v2-14.mp3",
  "./jon-chesterfield-v2-15.mp3",
  "./jon-chesterfield-v2-16.mp3",
  "./jon-chesterfield-v2-17.mp3",
  "./jon-chesterfield-v2-18.mp3",
  "./jon-chesterfield-v2-19.mp3",
  "./jon-chesterfield-v2-20.mp3",
  "./jon-chesterfield-v2-21.mp3",
  "./jon-chesterfield-v2-22.mp3",
  "./jon-chesterfield-v2-23.mp3",
  "./jon-chesterfield-v2-24.mp3",
  "./jon-chesterfield-v2-25.mp3",
  "./jon-chesterfield-v2-26.mp3",
  "./jon-chesterfield-v2-27.mp3",
  "./jon-chesterfield-v2-28.mp3",
  "./jon-chesterfield-v2-29.mp3",
  "./jon-chesterfield-v2-30.mp3",
  "./jon-chesterfield-v2-31.mp3",
  "./jon-chesterfield-v2-32.mp3",
  "./jon-chesterfield-v2-33.mp3",
  "./jon-chesterfield-v2-34.mp3",
  "./jon-chesterfield-v2-35.mp3",
  "./jon-chesterfield-v2-36.mp3",
  "./jon-chesterfield-v2-37.mp3",
  "./jon-chesterfield-v2-38.mp3",
  "./jon-chesterfield-v2-39.mp3",
  "./jon-chesterfield-v2-40.mp3",
  "./jon-chesterfield-v2-41.mp3",
  "./jon-chesterfield-v2-42.mp3",
  "./jon-chesterfield-v2-43.mp3",
  "./jon-chesterfield-v2-44.mp3",
  "./jon-chesterfield-v2-45.mp3",
  "./jon-chesterfield-v2-46.mp3",
  "./jon-chesterfield-v2-47.mp3",
  "./jon-chesterfield-v2-48.mp3",
  "./jon-chesterfield-v2-49.mp3",
  "./jon-chesterfield-v2-50.mp3",
  "./jon-chesterfield-v2-51.mp3",
  "./jon-chesterfield-v2-52.mp3",
  "./jon-chesterfield-v2-53.mp3",
  "./jon-chesterfield-v2-54.mp3",
  "./jon-chesterfield-v2-55.mp3",
  "./jon-chesterfield-v2-56.mp3",
  "./jon-chesterfield-v2-57.mp3",
  "./jon-chesterfield-v2-58.mp3",
  "./jon-chesterfield-v2-59.mp3",
  "./jon-chesterfield-v2-60.mp3",
  "./jon-chesterfield-v2-61.mp3",
  "./jon-chesterfield-v2-62.mp3",
  "./jon-chesterfield-v2-63.mp3",
  "./jon-chesterfield-v2-64.mp3"
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin) return;

  if (event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request, { cache: 'no-store' }).then((response) => {
      if (response.ok) caches.open(CACHE_NAME).then((cache) => cache.put('./index.html', response.clone()));
      return response;
    }).catch(() => caches.match('./index.html')));
    return;
  }

  const isVersionedCode = /\/(?:styles-v27.css|app-v27.js)$/.test(requestUrl.pathname);
  if (isVersionedCode) {
    event.respondWith(fetch(event.request, { cache: 'no-store' }).then((response) => {
      if (response.ok) caches.open(CACHE_NAME).then((cache) => cache.put(event.request, response.clone()));
      return response;
    }).catch(() => caches.match(event.request)));
    return;
  }

  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => {
    if (response.ok) caches.open(CACHE_NAME).then((cache) => cache.put(event.request, response.clone()));
    return response;
  })));
});
