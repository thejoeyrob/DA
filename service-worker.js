const CACHE_NAME = 'danco-assessment-v10-visual-voice-2-20260901';
const ASSETS = [
  './','./index.html','./app.css','./app.js','./manifest.webmanifest',
  './danco-logo.webp','./danco-logo-white.png','./danco-helper-english.png','./danco-helper-spanish.png',
  './icon-192.png','./icon-512.png','./apple-touch-icon.png','./social-preview.png',
  './visual-epdm.png','./visual-tpo.png','./visual-pvc.png','./visual-metal.png',
  './visual-tpo_correct.png','./visual-tpo_exposed.png','./visual-tpo_fishmouth.png','./visual-tpo_badlayout.png',
  './visual-ladder-3ft.png','./visual-ladder-1ft.png','./visual-ladder-2ft.png','./visual-ladder-flush.png',
  './visual-tool-seam-probe.png','./visual-tool-core-cutter.png','./visual-tool-chalk-reel.png','./visual-tool-tin-snips.png',
  './visual-action-clean-dry.png','./visual-action-more-heat.png','./visual-action-more-overlap.png','./visual-action-seal-over.png',
  './visual-signal-qualified.png','./visual-signal-roofer.png','./visual-signal-driver.png','./visual-signal-none.png',
  './visual-zone-perimeter.png','./visual-zone-center.png','./visual-zone-drain.png','./visual-zone-equal.png'
];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE_NAME).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  if(event.request.mode==='navigate'){
    event.respondWith(fetch(event.request).then(response=>{const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy));return response;}).catch(()=>caches.match('./index.html')));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{if(response.ok){const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy));}return response;})));
});
