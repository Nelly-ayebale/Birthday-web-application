function akanName() {
    var yearOfBirth = parseInt(document.getElementById("put-year")).value;
    var monthOfBirth = parseInt(document.getElementById("put-month")).value;
    var dateOfBirth = parseInt(document.getElementById("put-date")).value;
    var results = document.getElementById("for-submit").value;
    var gender = document.getElementsByName("gender").value;
    var maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}

var yy = yearOfBirth;
var mm = monthOfBirth;
var dd = dateOfBirth;
var Gender = gender;

var day = new Date(yy + "/" + mm + "/" + dd);
let dateOfBirth = day.getDay();


if (dd <= 0 || dd > 31) {
    alert("Invalid date");
    return false;
} else {
    alert("valid")
}
if (mm <= 0 || mm > 12) {
    alert("Please enter the correct month")
    return false;
} else {
    alert("valid")
}
let results = dateOfBirth;
akanName() = results();

function results() {
    if (Gender == "male" && mm == true && dd == true) {
        switch (dateOfBirth) {
            case 0:
                document.getElementById("display").textContent = "You were born on a" + "and your Akan name is" + maleAkanNames[0];
                return false;
                break;
            case 1:
                document.getElementById("display").textContent = "You were born on a" + "and your Akan name is" + maleAkanNames[1];
                return false;
                break;
            case 2:
                document.getElementById("display").textContent = "You were born on a" + "and your Akan name is" + maleAkanNames[2];
                return false;
                break;
            case 3:
                document.getElementById("display").textContent = "You were born on a" + "and your Akan name is" + maleAkanNames[0];
                return false;
                break;
            case 4:
                document.getElementById("display").textContent = "You were born on a" + "and your Akan name is" + maleAkanNames[0];
                return false;
                break;
            case 5:
                document.getElementById("display").textContent = "You were born on a" + "and your Akan name is" + maleAkanNames[0];
                return false;
                break;
            case 6:
                document.getElementById("display").textContent = "You were born on a" + "and your Akan name is" + maleAkanNames[0];
                return false;
                break;
            default:
                alert("You are undefined");
        }
    } else if (Gender == "female" && mm == true && dd == true) {
        switch (dateOfBirth) {
            case 0:
                document.getElementById("display").textContent = "You were born on a" + "and your Akan name is" + maleAkanNames[0];
                return false;
                break;
            case 1:
                document.getElementById("display").textContent = "You were born on a" + "and your Akan name is" + maleAkanNames[1];
                return false;
                break;
            case 2:
                document.getElementById("display").textContent = "You were born on a" + "and your Akan name is" + maleAkanNames[2];
                return false;
                break;
            case 3:
                document.getElementById("display").textContent = "You were born on a" + "and your Akan name is" + maleAkanNames[0];
                return false;
                break;
            case 4:
                document.getElementById("display").textContent = "You were born on a" + "and your Akan name is" + maleAkanNames[0];
                return false;
                break;
            case 5:
                document.getElementById("display").textContent = "You were born on a" + "and your Akan name is" + maleAkanNames[0];
                return false;
                break;
            case 6:
                document.getElementById("display").textContent = "You were born on a" + "and your Akan name is" + maleAkanNames[0];
                return false;
                break;
            default:
                alert("You are undefined");
        }
    }
}

