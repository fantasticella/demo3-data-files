//global variables 
var num1 = 10;
var myValue;

function add() {
     myValue = num1 + 12;
     document.getElementById("addResult").innerHTML = myValue;
}

function substract() {
    myValue = num1 - 12;
    document.getElementById("subResult").innerHTML = myValue;
}

function blurMsg() {
    var blurMessage = "You left the first name field.";
    document.getElementById("message").innerHTML = blurMessage;

}

function focusMsg() {
    var focusMessage = "You are now in the last name field.";
    document.getElementById("message").innerHTML = focusMessage;
}

function upper() {
    var someString = "This sentence is all uppercase.";
    alert(someString.toUpperCase());
}

function lower() {
    var someString = "This sentence is all lowercase.";
    alert(someString.toLowerCase());
}
//Box 3

function comeTogether() {
    var fname = "Jennifer "; 
    var lname = "Love ";
    var activity = "Loves to travel.";

    var sentence = fname + lname + activity; 


    document.getElementById("concatResult").innerHTML = sentence;
}