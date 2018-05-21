
$(document).ready(function () {
    var signUpForm = $("form.signup");
    var usernameInput = $("#username-input");
    var emailInput = $("#emailAddress");
    var passwordInput = $("#password-input");

    //$(document).on("click", "#add-user-btn", addUserBtn)
    //$("#add-user-btn").on("click", function(){
    //});
    signUpForm.on("submit", function (event) {
        event.preventDefault();
        console.log("hey I clicked the button");
        var userData = {
            name: usernameInput.val().trim(),
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };
        console.log(userData);


        // signUpUser({
        //     name: usernameInput.val().trim(),
        //     email: emailInput.val().trim(),
        //     password: passwordInput.val().trim()
        // });
        signUpUser(userData.name, userData.email, userData.password);
        usernameInput.val("");
        emailInput.val("");
        passwordInput.val("");
    });

    function signUpUser(name, email, pw) {
       // console.log("input: " + input);
        $.post("/api/newuser", {
            name: name,
            email: email,
            password: pw
        })
            .then(function (data) {
                console.log("second input console:" + data);
                window.location.replace(data);
            });
               // console.log(data);
               // 
            //}).catch(handleLoginErr);
    };

    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
});

// $(document).ready(function () {
//     var signUpForm = $("form.signup");
//     var usernameInput = $("#username-input");
//     var emailInput = $("#emailAddress");
//     var passwordInput = $("#password-input");

//     //$(document).on("click", "#add-user-btn", addUserBtn)
//     //$("#add-user-btn").on("click", function(){
//     //});
//     signUpForm.on("submit", function (event) {
//         event.preventDefault();
//         console.log("hey I clicked the button");
//         var userData = {
//             username: usernameInput.val().trim(),
//             email: emailInput.val().trim(),
//             password: passwordInput.val().trim()
//         };

//         if (!userData.username || !userData.email || !userData.password) {
//             return;
//         }

//         signUpUser(userData.username, userData.email, userData.password);
//         usernameInput.val("");
//         emailInput.val("");
//         passwordInput.val("");
//     });

//     function signUpUser(username, email, password) {
//         $.post("/api/newuser", {
//             name: username,
//             email: email,
//             password: password
//         }).then(function (data) {
//             console.log(data);
//              window.location.replace(data);
//         }).catch(handleLoginErr);
//     }

//     function handleLoginErr(err) {
//         $("#alert .msg").text(err.responseJSON);
//         $("#alert").fadeIn(500);
//     }
// });






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