var maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


function getAkanName() {
    var date = document.getElementById('date').value;
    var gender = document.getElementById('gender').value;
    var year = parseInt(date.substr(0, 4))
    var CC = parseInt(date.substr(0, 2));
    var DD = parseInt(date.substr(8, 9));
    var MM = parseInt(date.substr(5, 7));
    var YY = parseInt(date.substr(1, 3));
    var dayOfTheWeek = parseInt(
        (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7
    );
    var date = new Date(year, MM - 1, DD);
    if (date > new Date()) {
        alert("Invalid Date!")
    }
    if (gender === 'male') {
        alert("Your Akan Name is " + maleAkanNames[dayOfTheWeek]);
    } else if (gender === 'female') {
        alert("Your Akan Name is " + femaleAkanNames[dayOfTheWeek]);
    } else {
        alert("You are undefined");
    }

}







