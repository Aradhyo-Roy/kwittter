var firebaseConfig = {
    apiKey: "AIzaSyAMnOWLBLEPQajVnjRrKcLN1VBdN5iqGkk",
    authDomain: "puiter-4d64d.firebaseapp.com",
    databaseURL: "https://puiter-4d64d-default-rtdb.firebaseio.com",
    projectId: "puiter-4d64d",
    storageBucket: "puiter-4d64d.appspot.com",
    messagingSenderId: "880804498276",
    appId: "1:880804498276:web:5e2c4a8f34234a8310c871",
    measurementId: "G-XG3JFWZS1M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function getData() {
    firebase.database().ref("/").on('value', function(snapshot) 
    {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
    {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room name-"+Room_names);
    row="<div class='room_name' id="+Room_names+"onclick=redirectToRoomName(this.id)>"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();
function addroom(){
  room_name=document.getElementById("roomname").value;
  firebase.database().ref("/").child(room_name).update({
       Purpose:room_name 
  });
  localStorage.setItem("Room name", room_name);
  window.location="kwitter_page.html";
}
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room name", name);
  window.location="kwitter_page.html";
}
function logout(){
  window.location="index.html";
}