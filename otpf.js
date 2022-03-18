function whenclick(first, last) {
  if (first.value.length) {
    document.getElementById(last).focus();
  }
}

document.getElementById("scbutotp").addEventListener("click", function () {
  var otp1 = document.getElementById("ist").value;
  var otp2 = document.getElementById("sec").value;
  var otp3 = document.getElementById("third").value;
  var otp4 = document.getElementById("fourth").value;
  var otp5 = document.getElementById("fifth").value;

  if (otp1 == 1 && otp2 == 2 && otp3 == 3 && otp4 == 4 && otp5 == 5) {
    alert("The OTP entered by you is correct");
    window.location.href = "logout.html";
  } else {
    alert("Enter the correct OTP");
  }
});
