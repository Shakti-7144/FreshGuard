importScripts("https://www.gstatic.com/firebasejs/10.12.5/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.5/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDjlxGuNdWXoCIwEfnI5wr2zObzFtor4gM",
  authDomain: "smartfridge-c8495.firebaseapp.com",
  projectId: "smartfridge-c8495",
  storageBucket: "smartfridge-c8495.firebasestorage.app",
  messagingSenderId: "543901143241",
  appId: "1:543901143241:web:fb5647dd21942e5c007d18",
  measurementId: "G-1K90E24EME"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {

  console.log(
    "[firebase-messaging-sw.js] Background Message ",
    payload
  );

  self.registration.showNotification(
    payload.notification.title,
    {
      body: payload.notification.body,
      icon: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png"
    }
  );

});