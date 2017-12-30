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

messaging.requestPermission()
  .then(function() {
    console.log('Notification permission granted.');
    return messaging.getToken();
  })
  .then(function(token) {
    window.localStorage.setItem('token', token);
  })
  .catch(function(err) {
    console.log('Unable to get permission to notify.', err);
  });

  messaging.onTokenRefresh(function() {
    messaging.getToken()
    .then(function(refreshedToken) {
      localStorage.setItem('token', refreshedToken);
    })
    .catch(function(err) {
      console.log('Unable to retrieve refreshed token ', err);
    });
  });


  messaging.onMessage(function(payload) {
    console.log("Message received. ", payload);
    window.flashStore.showNotification = true;
    window.flashStore.notification = flattenNotification(payload);
  });


  function flattenNotification(payload) {
    return {
      title: payload.notification.title,
      body: payload.notification.body,
      click_action: payload.notification.click_action,
      type: payload.data && payload.data.notification_type,
      yesLabel: payload.data && payload.data.yesLabel,
      noLabel: payload.data && payload.data.noLabel,
      requester_id: payload.data && payload.data.requester_id
    }
  };
