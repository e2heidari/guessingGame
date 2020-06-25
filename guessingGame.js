answer = ""
const randomNumber = Math.round(Math.random() * 100);
function Process() {
    var RNumber = document.getElementById("yourNumber").value;
    if (randomNumber > RNumber) {
        answer = RNumber + " give me higher number"
    } else if (randomNumber < RNumber) {
        answer = RNumber + " give me lower number"
    } else {
        answer = RNumber + " yeep, it's right"
    }
    document.getElementById("result").innerText = answer
}