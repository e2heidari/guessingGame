answer = ""
const randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber)
function Process() {
    var RNumber = document.getElementById("yourNumber").value;
    RNumber = Number(RNumber)
    if (randomNumber > RNumber) {
        answer = "<span class='red'>" + RNumber + " give me higher number</span>"
    } else if (randomNumber < RNumber) {
        answer = "<span class='green'>" + RNumber + " give me lower number</span>"
    } else {
        answer = "<span class='yellow'>" + RNumber + " yeep, it's right</span>"
        document.getElementById("yourNumber").disabled = true;
    }
    document.getElementById("result").innerHTML = answer
}