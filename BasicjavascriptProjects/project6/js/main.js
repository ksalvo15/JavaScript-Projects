function ridefunction() {
    var height, can_ride;
    height = document.getElementById("height").value;
    can_ride = (height < 52) ? "you are too short":"you are tall enough";
    document.getElementById("ride").innerHTML = can_ride + " to ride.";
 }

 function age() { //these are ternary operations that require input from the user to determine one of 2 outcomes
    var age, can_vote;
    age = document.getElementById("age").value;
    can_vote = (age < 18) ? "you are too young":"you are old enough";
    document.getElementById("vote").innerHTML = can_vote + " to vote";
 }

 //class customer
 //{
   // string fullname;
   // Boolean Active;
   // customer(string identity) {
       // fullname = identity;
       // Active = true;
    //}
 //}

 function vehicle(make, model, year, color) { //this is a constructor function
    this.vehicle_make = make; //this means that make is = to vehicle.make so that when referencing it in the 
    this.vehicle_model = model; //lower portion of the funtion means that it will take the first object in the object constructor
    this.vehicle_year = year;
    this.vehicle_color = color;
 }

 var jack = new vehicle("dodge", "viper", 2020, "red"); //these are all the objects for jack
 var emily = new vehicle("jeep", "trail hawk", 2019, "white and black");
 var erik = new vehicle("ford", "pinto", 1971, "blue");

 function myfunction() { //this takes the keywords id from html and adds all the objects from eriks information to a sentence about his car
    document.getElementById("keywordsandconstructors").innerHTML = "erik drives a " + 
    erik.vehicle_color + "-colored " + erik.vehicle_model + 
    " manufactured in " + erik.vehicle_year;
}

function newthis() {
    document.getElementById("new_and_this").innerHTML = "jack drives a " + 
    jack.vehicle_color + "-colored " + jack.vehicle_model + 
    " manufactured in " + jack.vehicle_year;
}

function countfunction() {// this is a nested function, it is a function within a function
    document.getElementById("counting").innerHTML = count(); //this takes the counting id from the html and says it will be the count function
    function count() { //this function says the starting point is 9 and then adds another function to add one to the starting point with the pluc one function
        var start_point = 9; 
        function plusone() {start_point +=1;}
        plusone();
        return start_point;
    }
}