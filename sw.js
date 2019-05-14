importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-messaging.js');
var CACHE_NAME= 'PWA page';
var filesToCache= [
	'/',
	'/index.html',
	'/images/One_piece.png',
	'/images/profil.jpg',
	'/images/user.png',
	'/project1/css/style.css',
	'/project1/add2number.html',
	'/project1/add2number.js',
	'/project2/index.html',
	'/project2/script.js',
	'/project3/icon.css',
	'/project3/index.hmtl',
	'/project3/style.css'
];
var config = {
apiKey: "AAAAu3lr4QI:APA91bEetsqx_7xdRobVtxJL7MrNc_g2QjNR7eALNohZg6TxkR4kb5OOCZQaBYLUbNGvbp-clnrJyi0pGyTslRRpTYmjILxW6DENj92wWZEOKaS0FSpJOf9QY9P__QhrKzoyIYqeznRL",
authDomain: "ainurrahmat-41442.firebaseapp.com",
databaseURL: "https://ainurrahmat-41442.firebaseio.com",
projectId: "ainurrahmat-41442",
storageBucket: "ainurrahmat-41442.appspot.com",
messagingSenderId: "805195997442"
};
firebase.initializeApp(config);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
 const title = 'PWA';
 const options = {
  body: payload.data.body
 };
 return self.registration.showNotification(title, options);
});

self.addEventListener('install', function(e){
	console.log('[ServiceWorker] install');
	e.waitUntil(
		caches.open(cacheName).then(function(cache){
			console.log('[ServiceWorker] caching app shell');
			return cache.addAll(filesToCache);
		})
	);
});

/*self.addEventListener('activate', event=>{
	event.waitUntil(self.clients.claim());
});*/

self.addEventListener('fetch', event =>{
	event.respondWith(
		caches.match(event.request)
			.then(function(response){
				if (response) {
					return response;
				}
			return fetch(event.request);
			}
		)
	);
});

self.addEventListener('activate', function(event){
	var cachesWhitelist= [];

	event.waitUntil(
		caches.keys().then(function(cacheNames){
			return Promise.all(
				cacheNames.map(function(cacheName){
					if (cachesWhitelist.indexOf(cacheName)=== -1) {
						console.log('update caches');
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
});

/*const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
 const title = 'Hello World';
 const options = {
  body: payload.data.body
 };
 return self.registration.showNotification(title, options);
});*/