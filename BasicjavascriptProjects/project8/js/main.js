function whole_sentence() {
    var part1 = "i have "; 
    var part2 = "made this ";
    var part3 = "into a complete ";
    var part4 = "sentence.";
    var whole_sentence = part1.concat(part2, part3,part4); //this adds all the previous parts together
    document.getElementById("concat").innerHTML=whole_sentence;
}

function slice1() {
    var sentence = "all work and no play makes jonny a dull boy.";
    var section = sentence.slice(20,33); //this take the varibles from places 20-33
    document.getElementById("slice").innerHTML = section;
}

function upper() {
    var sentence1 = "all work and no play makes jonny a dull boy.";
    var uppercase = sentence1.toUpperCase(); //this makes the sentence uppercase
    document.getElementById("demo").innerHTML = uppercase;
}

function search1() {
    var sentence1 = "all work and no play makes jonny a dull boy.";
    var search2 = sentence1.search("jonny"); //this searches for the posistion of jonny
    document.getElementById("search1").innerHTML = search2;
}

function stringmethod() {
    var x =182; //this creates a string out of the interger
    document.getElementById("numbers_to_string").innerHTML = x.toString();
}

function precision() {
    var y = 12345.30215648; //this takes 10 places of the number
    document.getElementById("precision").innerHTML = y.toPrecision(10);
}

function fixed() {
    var y = 12345.30215648;
    document.getElementById("fixed").innerHTML = y.toFixed(2);
}

function value1() {
    var fruits = ["bannana", " orange", " apple"];
    document.getElementById("value1").innerHTML = fruits.valueOf();
}