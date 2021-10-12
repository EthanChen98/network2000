function submitUserContactInfo() {
  var userName = document.getElementById("userName");
  var userEmail = document.getElementById("userEmail");
  var phoneNumber = document.getElementById("phoneNumber");

  if (
    userName == null ||
    userName.value === "" ||
    userEmail == null ||
    userEmail.value === "" ||
    phoneNumber == null ||
    phoneNumber.value === ""
  ) {
    document.getElementById("needUserInfo").style.display = "inline";
    document.getElementById("Successful").style.display = "none";

  } else {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail.value)) {
        document.getElementById("needUserInfo").style.display = "inline";
        document.getElementById("Successful").style.display = "none";

        document.getElementById("needUserInfo").innerHTML = "* Please double check your email address"
    } else if (phoneNumber.value.length !== 10){

        document.getElementById("needUserInfo").style.display = "inline";
        document.getElementById("Successful").style.display = "none";

        document.getElementById("needUserInfo").innerHTML = "* Please double check your phone number"
    }else {
        document.getElementById("Successful").style.display = "inline";
        document.getElementById("needUserInfo").style.display = "none";

        document.getElementById("userName").value = "";
        document.getElementById("userEmail").value = "";
        document.getElementById("phoneNumber").value = "";
        document.getElementById("location").value = "";
        document.getElementById("message").value = "";
    }
  }
}
