function originalStatement(msg) {
    document.getElementById("originalStatement").innerHTML = msg;
}

function outPut(msg) {
    document.getElementById("output").innerHTML = msg;
}

function concateSomeStr() {
    let message = "Good Morning";

    let name = "Sir Umair Ahmad";

    let banger = "!";

    let html = "let message = " + message + ";<br />" + "let name = " + name + ";<br />" + "let banger = " + banger + ";<br />";

    let statement = message + " " + name + " " + banger;

    alert(statement);

    originalStatement(html);

    outPut(statement);
}

function askNameFromUser() {

    let askFromUser = prompt("please enter something.");

    let message = "Good Morning! ";

    if (!askFromUser) {

        outPut("You didn't Fill The input");

    } else {
        let cap = askFromUser.charAt(0).toUpperCase() + askFromUser.slice(1);

        let html = 'let askFromUser = prompt("please enter something."); <br/> let message = "Good Morning! ";'

        let statement = message + cap;

        alert(statement);

        outPut(statement);

        originalStatement(html);
    }
}
function comparisionOperators() {
    let drivingLicence = confirm("Do you have driving licence?");

    let age = confirm("Are you 18 years old?");

    let message;

    if (drivingLicence && age) {
        message = "you are eligible to driving.";

        outPut(message);

        alert(message);

    }
    else {
        message = "you are not eligible to driving.";

        alert(message);

        outPut(message);
    }
}
function ifElseIf() {
    let marks = +prompt("please enter your marks here");

    let message;
    if (marks >= 90) {
        message = "You got A+";
    } else if (marks >= 80) {
        message = "You got A";
    } else if (marks >= 70) {
        message = "You got B";
    } else {
        message = "You are fail.";
    }
    let html = 'let marks = +prompt("please enter your marks here"); <br/> let message;';
    alert(message);
    originalStatement(html);
    outPut(message);
}

function nestedIfStatement() {
    let age = prompt("What's your age? your age should be 18 years old");
    let haveCNIC = confirm("Do you have CNIC?");
    let isPakistani = confirm("Are you Pakistani?");
    let message;
    if (age >= 18) {
        if (haveCNIC) {
            if (isPakistani) {
                message = "You are eligible to vote casting.";
            } else {
                message = "you are not eligible to vote casting due to nationality status.";
            }
        } else {
            message = "you are not eligible to vote casting due to CNIC status.";
        }
    } else {
        message = "you are not eligible to vote casting due to age status.";
    }
    let html = "let age = prompt(\"What's your age? your age should be 18 years old\"); <br/> let haveCNIC = confirm(\"Do you have CNIC?\"); <br/> let isPakistani = confirm(\"Are you Pakistani?\"); <br/> let message;";
    alert(message);
    outPut(message);
    originalStatement(html);
} 
