function mathfunction() {
    var simple_math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("math").innerHTML = "1 plus 2, multiplied by 10, divided in"
    + "half and then subtracted by 5 equals " + simple_math;

}

function mathfunction1() {
    var remain = 25 % 6;
    document.getElementById("remainder").innerHTML = "divide 25 by 6 = " + remain;
}

function negative() {
    var negative = 10;
    document.getElementById("neg").innerHTML = -negative;
}

var x = 5; //this will bring the integer down to the next whole number
x--;
document.write(x);

var y = 5; //this will bring the integer up to the next whole number
y++;
document.write(y);

window.alert(Math.random() * 100); //will give a random number in the 