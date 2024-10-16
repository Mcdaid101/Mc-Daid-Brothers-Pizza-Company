const d = new Date();
let day = d.getDay();

if (day === 1 || day === 2) {
    document.getElementById("open-closed").innerHTML = "SORRY CLOSED TODAY"
} else {
    document.getElementById("open-closed").innerHTML = "OPEN TODAY 8AM - 8PM"
}