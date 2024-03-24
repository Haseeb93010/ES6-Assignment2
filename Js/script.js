function originalStatement(msg) {
    document.getElementById("originalStatement").innerHTML = msg;
}

function outPut(msg) {
    document.getElementById("output").innerHTML = msg;
}

// ? create function for concate some string----------------------------------------------

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

// ? create function for askNameFromUser------------------------------------------------------

function askNameFromUser() {

    let askFromUser = prompt("Please Enter Your Name.");

    let message;

    if (!askFromUser) {
        message = "You didn't Fill The input";
        outPut(message);

    } else {
        let cap = askFromUser.charAt(0).toUpperCase() + askFromUser.slice(1);

        let html = "let askFromUser = prompt(\"Please Enter Your Name.\"); <br/> let message;"

        message = "Good Morning ";

        let statement = message + cap;

        alert(statement);
        outPut(statement);
        originalStatement(html);
    }
}

// ? create comparisionOperators function------------------------------------------------------

function comparisionOperators() {
    let drivingLicence = confirm("Do you have driving licence?");

    let age = confirm("Are you 18 years old?");

    let message;

    if (drivingLicence && age) {
        message = "you are eligible to driving.";
    }
    else {
        message = "you are not eligible to driving.";
    }
    let html = "let drivingLicence = confirm(\"Do you have driving licence?\") <br/> let age = confirm(\"Are you 18 years old?\"); <br/>let message;"

    alert(message);
    originalStatement(html);
    outPut(message);
}

// ? create ifElseIf function------------------------------------------------------------------

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

// ? create Testing Sets Of Conditions function--------------------------------------------------

function testingSetsOfConditions() {
    let name = prompt("What's your name?");
    let age = +prompt("What's your age?");
    let weight = +prompt("What is your weight?");
    let message;

    if (age >= 18 && weight <= 70) {
        message = name + " you're smart man."
    } else if (age >= 18 && weight > 70) {
        message = name + " you're fat guy."
    } else {
        message = name + " you're a baby."
    }

    alert(message);
    outPut(message);
}

// ? create nestedIfStatement function-----------------------------------------------------------

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

// ? Login function -------------------------------------------------------------
function login(){
    var userName = prompt("Your user name.");
    var userPassword = +prompt("Your password.");

    if(userName === "haseeb" && userPassword === 123){
        alert("You're login.");
    } else{
        alert("You're not login.");
    }
}
