

function signup() {

    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;

    localStorage.setItem("name1", name)
    localStorage.setItem("age1", age)
    localStorage.setItem("address1", address)
    localStorage.setItem("email1", email)
    localStorage.setItem("pass1", pass)

   document.getElementById("name").value="";
   document.getElementById("age").value="";
  document.getElementById("address").value="";
   document.getElementById("email").value="";
   document.getElementById("pass").value="";


alert("user registered successfully...!!!");

}


function login(){



    var email=document.getElementById("email").value;
    var pass=document.getElementById("pass").value;

    var email1=localStorage.getItem("email1");
    var pass1=localStorage.getItem("pass1");

    if(email==email1 && pass==pass1){
        
        localStorage.setItem("code","secret");
        window.location.href="home.html";

    }else {
        alert("email and pass is incorrect")
    }

}