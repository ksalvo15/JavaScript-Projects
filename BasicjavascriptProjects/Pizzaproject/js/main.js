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

function getreceipt() {
    var text1 = '<h3>you ordered</h3>' //this will make the sting grow line by line to make the receipt
    var runningtotal = 0;
    var sizetotal  = 0;
    var sizearray = document.getElementsByClassName("size");
    for (var i = 0; i < sizearray.length; i++) {
        if (sizearray[i].checked) {
            var selectedsize = sizearray[i].value;
            text1 = text1+selectedsize+"<br>";
        }
    }
    if (selectedsize === "personalpizza") { //this tells the base price of the pizza that is selected
        sizetotal = 6;
    } else if (selectedsize === "smallpizza") {
        sizetotal = 8;
    } else if (selectedsize === "mediumpizza") {
        sizetotal = 10;
    } else if (selectedsize === "largepizza") {
        sizetotal = 14;
    } else if (selectedsize === "xtralargepizza") {
        sizetotal = 18;
    } 
    runningtotal = sizetotal;
    console.log(selectedsize+" = $"+sizetotal+".00");
    console.log("size text1:"+text1);
    console.log("subtotal: $"+runningtotal+".00");
    gettopping(runningtotal,text1); //these variables get passed to each function
};
function gettopping(runningtotal,text1) {
    var toppingtotal = 0;
    var selectedtopping = [];
    var toppingarray = document.getElementsByClassName("toppings");
    for (var j = 0; j <toppingarray.length; j++) {
        if (toppingarray[j].checked) {
            selectedtopping.push(toppingarray[j].value);
            console.log("selected topping item: ("+toppingarray[j].value+")");
            text1 = text1+toppingarray[j].value+"<br>";
        }
    }
    var toppingcount = selectedtopping.length;
    if (toppingcount > 1) {
        toppingtotal = (toppingcount -1);
    } else {
        toppingtotal = 0;
    }
    runningtotal = (runningtotal + toppingtotal);
    console.log("total selected topping items: " +toppingcount);
    console.log(toppingcount+" topping - 1 free topping = "+"$"+toppingtotal+".00");
    console.log("topping text1: "+text1);
    console.log("purchase total: "+"$"+runningtotal+".00");
    document.getElementById("showtext").innerHTML=text1;
    document.getElementById("totalprice").innerHTML="<h3>total: <strong>$"+runningtotal+".00"+"</strong></h3>";
};