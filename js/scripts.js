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
