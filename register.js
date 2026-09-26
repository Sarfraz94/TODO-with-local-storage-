var registerForm = document.getElementById("registerForm");

var username = document.getElementById("username");
var email = document.getElementById("registerEmail");
var password = document.getElementById("registerPassword");

var message = document.getElementById("registerMessage");


registerForm.addEventListener("submit", function (e) {

    e.preventDefault();


    var userNameValue = username.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();


    if (
        userNameValue == "" ||
        emailValue == "" ||
        passwordValue == ""
    ) {

        message.innerText = "Please fill all fields.";
        message.style.color = "red";

        return;

    }


    var users = JSON.parse(
        localStorage.getItem("users")
    ) || [];


    var userAlreadyExists = users.find(function (user) {

        return user.email == emailValue;

    });


    if (userAlreadyExists) {

        message.innerText =
            "This email is already registered.";

        message.style.color = "red";

        return;

    }


    var newUser = {

        username: userNameValue,

        email: emailValue,

        password: passwordValue

    };


    users.push(newUser);


    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );


    message.innerText =
        "Account created successfully!";

    message.style.color = "green";


    username.value = "";
    email.value = "";
    password.value = "";


    setTimeout(function () {

        window.location.href = "login.html";

    }, 1000);

});