$(document).ready(function () {
  var loginBtn = $("#loginBtn");
  var usernameInput = $("input#username-input");
  var passwordInput = $("input#password-input");

  loginBtn.on("click", function (event) {
    event.preventDefault();
    console.log("hey");

    var userData = {
      username: usernameInput.val().trim(),
      password: passwordInput.val().trim()
    };
     //console.log(userData);
    if (!userData.username || !userData.password) {
      return;
    }
    console.log("the function is still running");

    loginUser(userData.username, userData.password);
    // emailInput.val("");
    // passwordInput.val("");
  });

  function loginUser(username, password) {
    $.post("/api/login", {
      name: username,
      password: password
    }).then(console.log("beep"));
    //   function (data) {
    //   window.location.replace(data);
    // }).catch(function (err) {
    //   console.log(err);
    // });
  };
});