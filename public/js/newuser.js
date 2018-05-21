$(document).ready(function () {
    var signUpForm = $("form.signup");
    var usernameInput = $("input#username-input");
    var emailInput = $("input#emailAddress");
    var passwordInput = $("input#password-input");

    //$(document).on("click", "#add-user-btn", addUserBtn)
    //$("#add-user-btn").on("click", function(){
    //});
    signUpForm.on("submit", function (event) {
        event.preventDefault();
        var userData = {
            username: usernameInput.val().trim(),
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.username || !userData.email || !userData.password) {
            return;
        }

        signUpUser(userData.username, userData.email, userData.password);
        usernameInput.val("");
        emailInput.val("");
        passwordInput.val("");
    });

    function signUpUser(username, email, password) {
        $.post("/api/chef", {
            username: name,
            email: email,
            password: password
        }).then(function (data) {
            window.location.replace(data);
        }).catch(handleLoginErr);
    }

    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
});
   /* function addUserBtn(event) {
        event.preventDefault();

        // Don't do anything if the fields are empty
        if (!username.val().trim() ||
            !password.val().trim() ||
            !email.val().trim()) {
            return;
        }
        //call addCheftoDb and pass in the user inputs
        addCheftoDb({
            name: username.val().trim(),
            password: password.val().trim(),
            email: email.val().trim()
        });
    };

    // A function for creating a chef then console logging the info
    function addCheftoDb(authorData) {
        $.post("/newuser", authorData)
            .then(console.log(authorData));
    }


    });*/