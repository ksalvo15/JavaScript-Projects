
var x=10; //global variable
var y = 20; //local variable

function addnumbers1() {
    document.write(20 + x +"<br>");
}
function addnumbers2() {
    var y = 20; //local variable
    document.write(x + y + 10 +"<br>");
}
function addnumbers3() {
    console.log(x + y + 100 +"<br>"); //debug to se why the local variable y is not showing up
}

addnumbers1();
addnumbers2();
addnumbers3();

function getdate() {
    var time = new Date().getHours();
    var saying;
    if (time < 12 == time >0) { //this is saying if it is a time before 12 and after time 0 it is the morning
        saying = "it is the morning";
    }
    else if (time >= 12 == time < 18) { //this is saying if the time is after 12 and equal to a time before 6 it is the afternoon
        saying = "it is the afternoon";
    }
    document.getElementById("greeting").innerHTML = saying;
}

function agefunction() {
    age = document.getElementById("age").value;
    if (age >=18) {
        vote = "you are old enough";
    }
    else {
        vote = "you are not old enough";
    }
    document.getElementById("howold?").innerHTML = vote;
}
