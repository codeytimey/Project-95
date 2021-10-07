// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcFs4q4UNlZN34L5A5r8Gp-S3t3P2p6xg",
    authDomain: "lets-chat-web-app-1b382.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-1b382-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-1b382",
    storageBucket: "lets-chat-web-app-1b382.appspot.com",
    messagingSenderId: "82256188255",
    appId: "1:82256188255:web:345c7fb75e5396ab239cea"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name"); 
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  
  function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location="chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("Room name - "+Room_names);
 row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
 document.getElementById("output").innerHTML+=row;

 //End code
 });});}
getData();

function redirectToRoomName(name){
 console.log(name);
 localStorage.setItem("room_name", name);
 window.location="chat_page.html";
}