var loginForm = document.getElementById("loginForm");

var email = document.getElementById("loginEmail");
var password = document.getElementById("loginPassword");

var message = document.getElementById("loginMessage");


loginForm.addEventListener("submit", function (e) {

    e.preventDefault();


    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();


    if (
        emailValue == "" ||
        passwordValue == ""
    ) {

        message.innerText =
            "Please enter email and password.";

        message.style.color = "red";

        return;

    }


    var users = JSON.parse(
        localStorage.getItem("users")
    ) || [];


    var foundUser = users.find(function (user) {

        return (
            user.email == emailValue &&
            user.password == passwordValue
        );

    });


    if (foundUser) {

        localStorage.setItem(
            "loggedInUser",
            JSON.stringify(foundUser)
        );


        window.location.href = "index.html";

    }

    else {

        message.innerText =
            "Invalid email or password.";

        message.style.color = "red";

    }

});