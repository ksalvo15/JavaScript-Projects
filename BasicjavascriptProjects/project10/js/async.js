//alert(document.getElementById("pl").innerHTML);


function countto10() {
    var digit = "";
    var x=1;
    while(x<11) {
        digit += "<br>" +x;
        x++;
    }
    document.getElementById("countto10").innerHTML=digit;
}



var instruments = ["guitar", "drums", "piano", "bass", "flute"]
var content = "";
function forloop() { //this is a for loop
    for (y=0; y <instruments.length; y++) {
        content +=instruments[y]+"<br>";
    }
    document.getElementById("listinstruments").innerHTML = content;
}

function whileloop() { //this is a while loop
    let text = "";
    let i = 0;
        while (i < 10) {
    text += "<br>The number is " + i;
    i++;
}
document.getElementById("while").innerHTML = text;
}

function catpics() { //this is an array
    var catpic = [1];
    catpic[0] = "sleeping";
    catpic[1] = "playing";
    catpic[2] = "eating";
    catpic[3] = "purring";
    document.getElementById("cat").innerHTML = "in this picture is a cat "
        + catpic[2] + "";
}



function constfunction() {
    const musicalins = {type:"guitar", brand:"fender", color:"black"};
    musicalins.color = "blue"; //this will change the constant color which was black to blue
    musicalins.price = "$900"
    document.getElementById("constant").innerHTML = "the cost of the " + 
    musicalins.type + " was" + musicalins.price;
}


function object1(){
let car1 = { //object and it's keywords, it uses the this keyword to return a sentence with the make model and year of the car
    make: "dodge",
    model: "viper",
    year: "2022",
    description : function() {
        return "the car is a " + this.year + this.model + this.make;
    }
};
document.getElementById("carobject").innerHTML = car1.description();
}

function break1() {
let text1 = ""; //break in a loop at 5 and stop the function
for (let i = 0; i <10; i++) {
    if (i ===5) {break;}
    text1 += "the number is " +i + "<br>";
}
document.getElementById("break").innerHTML = text1;
}

function continue1() {
let text2 = ""; //continue statement this will skip the number 5 like a break but then continue on until i is 9 which is < 10
for (let i = 0; i < 10; i++) {
  if (i === 5) { continue; }
  text2 += "The number is " + i + "<br>";
}
document.getElementById("continue").innerHTML = text2;
}


