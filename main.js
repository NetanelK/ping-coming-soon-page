function validate(){
    var email = document.getElementById("email");
    var error = document.getElementById("error-msg");
    if(email.value == ""){
        error.style.display = "block";
        error.innerHTML = "Whoops! It looks like you forgot to add your email";
        email.style.borderColor = "hsl(354, 100%, 66%)";
        return false;
    }
    if(!validateEmail(email.value)){
        error.style.display = "block";
        error.innerHTML = "Please provide a valid email address";
        email.style.borderColor = "hsl(354, 100%, 66%)";
        return false;
    }
    return true;
}

function validateEmail(email){
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}