function clearStatement(){
    document.getElementById("originalStatement").innerHTML = " ";
}
function clearOutput(){
    document.getElementById("output").innerHTML = " ";
}
function concateSomeStr() {
    let message = "Good Morning";
    let name = "Sir Umair Ahmad";
    let banger = "!";
    alert(message + " " + name + " " + banger);
    let html = "let message = " + message + ";<br />" + "let name = " + name + ";<br />" + "let banger = " +  banger + ";<br />";
    document.getElementById("output").innerHTML = html;
}
