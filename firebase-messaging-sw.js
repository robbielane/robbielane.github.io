importScripts('https://www.gstatic.com/firebasejs/4.1.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.1.2/firebase-messaging.js');

var config = {
  apiKey: "AIzaSyD0zQ94anWCaRHVokhJmqvQVbFM7aa_VOw",
  authDomain: "brew-metrics.firebaseapp.com",
  databaseURL: "https://brew-metrics.firebaseio.com",
  projectId: "brew-metrics",
  storageBucket: "brew-metrics.appspot.com",
  messagingSenderId: "964644623253"
};
firebase.initializeApp(config);

var messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  // DOES THIS DO ANYTHING??
  // console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // const { title, body } = payload.notification
  //
  // const notificationPromise = self.registration.showNotification(title, options);
  // event.waitUntil(notificationPromise);
});
