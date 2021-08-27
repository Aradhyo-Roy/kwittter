function adduser(){
    your_name=document.getElementById("User_name").value;
    localStorage.setItem("User name", your_name);
    window.location("kwitterjome.html");
}