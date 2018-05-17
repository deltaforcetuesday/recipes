$(document).ready(function () {

    $(document).on("click", "#add-user-btn", addUserBtn)
    //$("#add-user-btn").on("click", function(){
    //});

function addUserBtn(event) {
    event.preventDefault();
    var username = $("#username-input");
    var password = $("#password-input");
    var email = $("#emailAddress");
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


});