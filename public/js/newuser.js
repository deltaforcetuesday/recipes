$(document).ready(function () {
    var signUpForm = $("form.signup");
    var usernameInput = $("#username-input");
    var emailInput = $("#emailAddress");
    var passwordInput = $("#password-input");
    //sticky navbar  
 $(window).on("scroll", function() {
    if ($(window).scrollTop()){
      $("#nb").addClass("sticky")
    }
    else{
      $("#nb").removeClass("sticky")
    }
  });
  

    signUpForm.on("submit", function (event) {
        event.preventDefault();
        //console.log("hey I clicked the button");
        var userData = {
            name: usernameInput.val().trim(),
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };
        //console.log(userData);

        if (!userData.name || !userData.email || !userData.password) {
            return;
        }
        signUpUser(userData.name, userData.email, userData.password);
        usernameInput.val("");
        emailInput.val("");
        passwordInput.val("");
    });

    function signUpUser(name, email, pw) {

        $.post("/api/newuser", {
                name: name,
                email: email,
                password: pw
            })
            .then(function (data) {
                window.location.replace(data);
            }).catch(handleLoginErr);
    };

    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
});