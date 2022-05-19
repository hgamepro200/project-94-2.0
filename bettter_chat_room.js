var firebaseConfig = {
    apiKey: "AIzaSyChJePTrEdhPNHdIKwRH_PS9FAmFXhED5c",
    authDomain: "better-chat-4c3de.firebaseapp.com",
    databaseURL: "https://better-chat-4c3de-default-rtdb.firebaseio.com",
    projectId: "better-chat-4c3de",
    storageBucket: "better-chat-4c3de.appspot.com",
    messagingSenderId: "1082106610871",
    appId: "1:1082106610871:web:e3bb6e26cd67bb7724b932"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    room_names = childKey;
    //Start code
    
    //End code
    });});}