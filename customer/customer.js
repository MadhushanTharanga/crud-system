function validateForm(){
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;

    if (name == ""){
        alert("Name is required");
    }
    else if (address == ""){
        alert("Address is required");
    }
    else if (email == ""){
        alert("Email is required");
    }
    else if (!email.includes('@')){
        alert("Invalid email address");
    }
    else if (age == ""){
        alert("age is required");
    }else if (age<1){
        alert("Age must not be zero or less than zero");
    }
}