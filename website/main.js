function validate() {
    var email = document.getElementById("email");
    if(email.value == ""){
        console.log(email.value);
        document.getElementById("error").innerHTML = "Whoops! It looks like you forgot to add your email";
        document.getElementById("error").style.display = "inline-block";
        email.style.borderColor = "hsl(354, 100%, 66%)";
        return false;
    }
    if( !validateEmail(email.value)){
        document.getElementById("error").innerHTML = "Please provide a valid email address";
        document.getElementById("error").style.display = "inline";
        email.style.borderColor = "hsl(354, 100%, 66%)";
        return false;
    }
    
    // else{
    //     for(i = 0; i < email.innerHTML.length; i++){
    //         if(email.innerHTML[i] == '@')
    //             return true;
    //     }
    //     document.getElementById("error").innerHTML = "Please provide a valid email address";
    //     document.getElementById("error").style.display = "inline";
    //     return false;
    // }
    // else{
    //     document.getElementById("error").style.display = "none";
    // }
    console.log("hasdi");
    return true;
}

function validateEmail(email) {
    //var re = /\S+@\S+\.\S+/;
    var re = /^[^\s@#!]+@[^\s@.#!]+.[^\s@.]+$/;
    return re.test(email);
}