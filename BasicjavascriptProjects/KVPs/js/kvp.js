function mydictionary() {
    var animal = { //these are the key value pairs
        species:"dog",
        color:"black",
        breed:"lab"
    };
    delete animal.color; //this will delet color
    document.getElementById("dictionary").innerHTML = animal.color; //this will then come up as undefined because the value color was deleted
}