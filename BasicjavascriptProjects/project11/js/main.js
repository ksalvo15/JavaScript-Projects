function colorfunction() { //this is a switch statement, it will go through all the choices until it gets to the one that was input
    var coloroutput;
    var colors = document.getElementById("colorinput").value;
    var colorstring = " is a great color";
    switch(colors) {
            case "red":
            coloroutput = "red" +colorstring;
            break;
            case "yellow":
            coloroutput = "yellow" +colorstring;
            break;
            case "blue":
            coloroutput = "blue" +colorstring;
            break;
            case "green":
            coloroutput = "green" +colorstring;
            break;
            case "purple":
            coloroutput = "purple" +colorstring;
            break;
            default:
            coloroutput = "please enter a color exactly as written on above list";
    }
    document.getElementById("output").innerHTML = coloroutput;
}

function myfunction() {
    var A = document.getElementsByClassName("click");
    A[0].innerHTML = "the text has changed";
}

var c = document.getElementById("mycanvas");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createLinearGradient(0, 0, 480, 0);
grd.addColorStop(0, "green");
grd.addColorStop(1, "white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 480, 230);


//form validation

function validateform() {
    let x= document.forms["myform"]["fname"].value;
    if (x=="") {
        alert("name must be filled out");
        return false;
    }
}

function displaytype(character) {
    var charactertype = character.getAttribute("data-character-type");
    alert(charactertype + " is in the  " + character.innerHTML + " universe");
}