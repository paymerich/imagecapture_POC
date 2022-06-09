importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.5.2/workbox-sw.js");

workbox.routing.registerRoute(({request}) =>request.destination === 'image',
 new workbox.strategies.CacheFirst());

 
 self.addEventListener('install',function(){console.log('App Installed');});

 self.addEventListener('activate',function(){console.log('App Activated');});