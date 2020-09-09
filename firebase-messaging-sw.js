importScripts('https://www.gstatic.com/firebasejs/7.12.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.12.0/firebase-messaging.js');

var firebaseConfig = {
  apiKey: "AIzaSyCjHq5yeIOheQ_EiArA5-o45ohrPLLHlv0",
  authDomain: "sales-yang.firebaseapp.com",
  databaseURL: "https://sales-yang.firebaseio.com",
  projectId: "sales-yang",
  storageBucket: "sales-yang.appspot.com",
  messagingSenderId: "998844496606",
  appId: "1:998844496606:web:2eb09ffe5d323cf3e6204f",
  measurementId: "G-JZVX693SGB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize data here
  const title = payload.data.title;
  const options = {
    body: payload.data.body
  };
  return self.registration.showNotification(title,options);
});