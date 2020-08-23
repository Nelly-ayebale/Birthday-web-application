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
}
if (mm <= 0 || mm > 12) {
    alert("Please enter the correct month")
    return false;
}

akanName();
if (male.checked == true && dd == valid && mm == valid) {
    document.getElementById("display").innerHTML = "You were born on a" + daysOfWeek[dateOfBirth]
} else if (female.checked == true && dd == valid && mm == valid) {
    document.getElementById("display").innerHTML = "You were born on a" + daysOfWeek[dateOfBirth]
} else {
    alert("No Akan Name for you!")
}

