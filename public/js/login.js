$(document).ready(function () {
  var loginBtn = $("#loginBtn");
  var usernameInput = $("input#username-input");
  var passwordInput = $("input#password-input");
  //sticky navbar  
 $(window).on("scroll", function() {
  if ($(window).scrollTop()){
    $("#nb").addClass("sticky")
  }
  else{
    $("#nb").removeClass("sticky")
  }
});


  loginBtn.on("click", function (event) {
    event.preventDefault();

    var userData = {
      username: usernameInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.username || !userData.password) {
      return;
    }

    loginUser(userData.username, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  function loginUser(username, password) {
    $.post("/api/login", {
      name: username,
      password: password
    }).then(function (data) {
      window.location.replace(data);
    }).catch(function (err) {
      console.log(err);
    });
  };
});