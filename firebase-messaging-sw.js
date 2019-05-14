importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-messaging.js');
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