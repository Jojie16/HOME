// JavaScript source code
var attempt = 10; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "Cute" && password == "LarJie<3") {
        alert("Login successfully");
        window.location = "https://polard.ml/My-Langga/"; // Redirecting to other page.
        return false;
    }
    else {
        attempt--;// Decrementing by one.
        alert("You have left " + attempt + " attempt\nPlease read the Note!");
        // Disabling fields after 3 attempts.
        if (attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            alert("Please follow the instructions\n\n\n Reload the page to Re-Continue")
            return false;
        }
    }
}