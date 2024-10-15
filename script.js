const d = new Date();
let day = d.getDay();

if (day === 1 || day === 2) {
    document.getElementById("open-closed").innerHTML = "Sorry We're Closed Today"
} else {
    document.getElementById("open-closed").innerHTML = "We're open today from 8:00am to 8:30pm"
}