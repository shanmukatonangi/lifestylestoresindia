document.getElementById("sscsignin").addEventListener("click", function () {
  var email1 = document.getElementById("email").value;
  var pass1 = document.getElementById("pass").value;

  // var userData = JSON.parse(localStorage.getItem("signupDetails")) || [];

  // var data = {
  //   email: email1.value,
  //   password: pass1.value,
  // };
  // userData.push(data);
  // localStorage.setItem("signupDetails", JSON.stringify(userData));

  document.querySelector("#sscsignin").addEventListener("click", login);
  function login() {
    window.location.href = "otpf.html";
  }
});
