document.write(10==10); //we are checking for equality is 10 equal to 10
document.write("<br>");
document.write("word"==="string"); //this is checking to see if the data on each side of the equation is equal to each other
document.write("<br>");
document.write(10>10 && 10>4);//this will be false because both need to be true because of and
document.write("<br>");
document.write(10==10 || 10<4); //this will be true because only one needs to be true because of or
document.write("<br>");
document.write(10+"string"); //this is combining a string and a number
document.write("<br>");
document.write(typeof 3); //this is a type of operator

function not() {
   document.getElementById("not").innerHTML =!(5<10); //this will be false because 5 is smaller than 10 but it is a not function
}
//function myfunction() {
    
   // document.getElementById("test").innerHTML = isNaN('this is a string');
   
//}

//function myfunction1() {
    
    //document.getElementById("test1").innerHTML = isNaN('007');
//}

//function inf() {
//document.getElementById("large").innerHTML = 3E310;
//}

//function inf1() {
//document.getElementById("small").innerHTML = -3E310;
//}
//console.log(2+2);
//console.log(10>12);