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
    let message = "Good Morning";
    
    let nameFromUser = prompt("Please Enter Your Name Here.");
    
    let cap = nameFromUser.charAt(0).toUpperCase() + nameFromUser.slice(1);
    
    let html = "let message = " + message + ";" + "<br />" + 'let nameFromUser = prompt("Please Enter Your Name Here.");';
    
    let statement = message + " " + cap;

    alert(statement);

    originalStatement(html);
    outPut(statement)
}