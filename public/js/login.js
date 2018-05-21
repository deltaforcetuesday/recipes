$(document).ready(function () {
  var loginForm = $("form.login");
  var usernameInput = $("input#username-input");
  var passwordInput = $("input#password-input");

  loginForm.on("submit", function (event) {
    event.preventDefault();
    var userDate = {
      username: usernameInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userDate.username || !userDate.password) {
      return;
    }

    loginUser(userData.username, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  function loginUser(username, password) {
    $.post("/api/login", {
      username: name,
      password: password
    }).then(function (data) {
      window.location.replace(data);
    }).catch(function (err) {
      console.log(err);
    });
  }
});