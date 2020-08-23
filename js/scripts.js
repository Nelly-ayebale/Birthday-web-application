function akanName() {
    var yearOFBirth = document.getElementById("put-year").value;
    var monthOfBirth = document.getElementById("put-month").value;
    var dateOfBirth = document.getElementById("put-date").value;
    let gender = document.getElementsByName("gender").value;

}
function GENDER() {
    if (gender.checked) {
        return genderValue;
    }
}
let genderValue = GENDER();

function monthValid() {
    if (monthOfBirth <= 0 || monthOfBirth > 12) {
        return invalid;
    } else {
        return valid;

    }
};
function dateValid() {
    if (dateOfBirth <= 0 || dateOfBirth > 31) {
        return invalid;
    } else {
        return valid;
    }
};
let validMonth = monthValid();
let validDate = dateValid();

var d = new Date();
d.setFullYear();
document.getElementsByClassName("inputs");

let dayOfTheWeek = d;

let daysofTheWeek = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
]
let maleAkanNames = [
    "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
]
let femaleAkanNames = [
    "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
]

if (genderValue === female && validMonth && validDate) {
    document.getElementById("results") = "You were born on" + daysofTheWeek[index] + "and your Akan is" + maleAkanNames[index]
} else if {
    document.getElementById("results") = "You were born on" + daysofTheWeek[index] + "and your Akan is" + femaleAkanNames[index]
} else {
    console.log("No Akan name for you!")
}