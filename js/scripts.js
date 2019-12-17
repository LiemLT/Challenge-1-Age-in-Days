function ageCalculate() {
    let birthYear = prompt("What is your birth year?");
    let ageInDays = (new Date().getFullYear() - birthYear) * 365;
    let h2 = document.createElement("h2");
    let textAnswer = document.createTextNode("You are " + ageInDays + " days old.");
    h2.setAttribute("id", "ageInDays");
    h2.appendChild(textAnswer);
    document.getElementById("result").appendChild(h2);
}

function reset() {
    document.getElementById("ageInDays").remove();
}