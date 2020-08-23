function akanName() {
    var yearOFBirth = document.getElementById("put-year").value;
    var monthOfBirth = parseInt(document.getElementById("put-month").value);
    var dateOfBirth = parseInt(document.getElementById("put-date").value);
    let century = parseInt(document.getElementById("century").value);

}
function monthValid() {
    if (monthOfBirth <= 0 || monthOfBirth > 12) {
        alert(invalid);
    } else {
        return valid;

    }
};

function dateValid() {
    if (dateOfBirth <= 0 || dateOfBirth > 31) {
        alert("invalid");
    } else {
        return valid;
    }
};

let validMonth = monthValid();
let validDate = dateValid();

var dayOfTheWeek = calculation();

function calculation() {
    akanName();
    (((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + date) % 7;
    return (Math.floor(dayOfTheWeek);
}



let maleAkanNames = [
    "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
]
let femaleAkanNames = [
    "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
]

switch (gender) {
    case "male"
    if (dayOfTheWeek == 0 && validMonth && validDate) {
            document.getElementById("results").innerHTML = "Sunday" + maleAkanNames[0];
        } else if (dayOfTheWeek == 1 && validMonth && validDate) {
            document.getElementById("results").innerHTML = "Monday" + maleAkanNames[1];
        } else if (dayOfTheWeek == 2 && validMonth && validDate) {
            document.getElementById("results").innerHTML = "Tuesday" + maleAkanNames[2];
        } else if (dayOfTheWeek == 3 && validMonth && validDate) {
            document.getElementById("results").innerHTML = "Wednesday" + maleAkanNames[3];
        } else if (dayOfTheWeek == 4 && validMonth && validDate) {
            document.getElementById("results").innerHTML = "Thursday" + maleAkanNames[4];
        } else if (dayOfTheWeek == 5 && validMonth && validDate) {
            document.getElementById("results").innerHTML = "Friday" + maleAkanNames[5];
        } else if (dayOfTheWeek == 6 && validMonth && validDate) {
            document.getElementById("results").innerHTML = "Saturday" + maleAkanNames[6];
        }
}
break;
    case "female"
if (dayOfTheWeek == 0) {
    document.getElementById("results").innerHTML = "Sunday" + femaleAkanNames[0];
} else if (dayOfTheWeek == 1 && validMonth && validDate) {
    document.getElementById("results").innerHTML = "Monday" + femaleAkanNames[1];
} else if (dayOfTheWeek == 2 && validMonth && validDate) {
    document.getElementById("results").innerHTML = "Tuesday" + femaleAkanNames[2];
} else if (dayOfTheWeek == 3 && validMonth && validDate) {
    document.getElementById("results").innerHTML = "Wednesday" + femaleAkanNames[3];
} else if (dayOfTheWeek == 4 && validMonth && validDate) {
    document.getElementById("results").innerHTML = "Thursday" + femaleAkanNames[4];
} else if (dayOfTheWeek == 5 && validMonth && validDate) {
    document.getElementById("results").innerHTML = "Friday" + femaleAkanNames[5];
} else if (dayOfTheWeek == 6 && validMonth && validDate) {
    document.getElementById("results").innerHTML = "Saturday" + femaleAkanNames[6];
}
}
break;
default ;
}
