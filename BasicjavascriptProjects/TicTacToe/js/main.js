let activeplayer = 'X'; //this keeps track of whose turn it is
let selectedsquares = []; //this array stores an array of moves. we use this to determine win conditions

function placeXorO(squarenumber) {  //function for placing X or O
    if (!selectedsquares.some(element => element.includes(squarenumber))) { //this ensures that the square hasn't already been selected
        let select = document.getElementById(squarenumber); //this retrieves the html id that was clicked

        if (activeplayer === 'X') { //this checks whose turn it is
            select.style.backgroundImage = 'url("images/x.png")'; //will place the x image in the clicked square
        } else {
            select.style.backgroundImage = "url('images/o.png')"; //computer will place the o image in the square
        }
        selectedsquares.push(squarenumber + activeplayer);
        checkwinconditions(); //checks for win conditions
        if (activeplayer === 'X') { //this will change the active player
            activeplayer = 'O'; //if the active player is x it will change it to o
        } else {
            activeplayer = 'X'; //changes active player to x
        }
        audio('sounds/place.mp3'); //this plays sound with the click
        if (activeplayer === 'O') {
            disableclick(); //disables clicking for computers turn
            setTimeout(function () {computersturn(); }, 1000); //tells the computer to wait for a bit 
        }
        return true; //this is needed for computerturn funciton to work
    }
    function computersturn() { //makes the square random
        let success = false;
        let pickasquare; //picks from pickasquare
        while (!success) {
            pickasquare = String(Math.floor(Math.random() * 9));
            if (placeXorO(pickasquare)) {
                placeXorO(pickasquare);
                success = true; //this changes boolean and ends loop
            };
        }

    }
}

function checkwinconditions() { //this will check the square array to search for win conditions and will draw line if condition is met
    if (arraryincludes('0X', '1X', '2X')) { drawwinline(50, 100, 558, 100)}
    else if (arraryincludes('3X', '4X', '5X')) { drawwinline(50, 304, 558, 304)}
    else if (arraryincludes('6X', '7X', '8X')) { drawwinline(50, 508, 558, 508)}
    else if (arraryincludes('0X', '3X', '6X')) { drawwinline(100, 50, 100, 558)}
    else if (arraryincludes('1X', '4X', '7X')) { drawwinline(304, 50, 304, 558)}
    else if (arraryincludes('2X', '5X', '8X')) { drawwinline(508, 50, 508, 558)}
    else if (arraryincludes('6X', '4X', '2X')) { drawwinline(100, 508, 510, 90)}
    else if (arraryincludes('0X', '4X', '8X')) { drawwinline(100, 100, 520, 520)}
    else if (arraryincludes('0O', '1O', '2O')) { drawwinline(50, 100, 558, 100)}
    else if (arraryincludes('3O', '4O', '5O')) { drawwinline(50, 304, 558, 304)}
    else if (arraryincludes('6O', '7O', '8O')) { drawwinline(50, 508, 558, 508)}
    else if (arraryincludes('0O', '3O', '6O')) { drawwinline(100, 50, 100, 558)}
    else if (arraryincludes('1O', '4O', '7O')) { drawwinline(304, 50, 304, 558)}
    else if (arraryincludes('2O', '5O', '8O')) { drawwinline(508, 50, 508, 558)}
    else if (arraryincludes('6O', '4O', '2O')) { drawwinline(100, 508, 510, 90)}
    else if (arraryincludes('0O', '4O', '8O')) { drawwinline(100, 100, 520, 520)}
    else if (selectedsquares.length >= 9) { //this checks for a tie
        audio('sounds/tie.mp3'); //will play the tie sound
        setTimeout(function(){ resetgame();}, 500);
    }
    function arraryincludes(squareA, squareB, squareC) {//this will check if there are 3 in a row
        const a = selectedsquares.includes(squareA);
        const b = selectedsquares.includes(squareB);
        const c = selectedsquares.includes(squareC);
        if (a===true && b===true && c===true) {return true;} //if it is true the drawline function happens
    }
    
}

function disableclick() { //makes body element temp unclickable
    body.style.pointerevents = 'none';
    setTimeout(function() {body.style.pointerevents = 'auto';}, 1000);//makes clickable after 1 sec
}

function audio(audioURL) { //this takes a string parameter of the path set earlier for placement sound
    let audio = new Audio(audioURL);
    audio.play();
}


function drawwinline(coordX1, coordY1, coordX2, coordY2) { //this will draw the win line
    const canvas = document.getElementById('win-lines'); //will use the html canvas element
    const c = canvas.getContext('2d'); //give access to methods and properties on canvas
    let x1 = coordX1, //where start of x axis is
    y1 = coordY1,//where start of y axis is
    x2 = coordX2,//where end of x axis is
    y2 = coordY2,//where end of y axis is
    x= x1, //will store temp x axis data in animation loop
    y=y1; //will store temp y axis data in animation loop
    function animatelinedrawing() { //function to interact and draw a line in the canvas
            const animationloop = requestAnimationFrame(animatelinedrawing); //creates a loop
            c.clearRect(0, 0, 608, 608); //clears content from last loop iteration
            c.beginPath(); //starts a new path
            c.moveTo(x1, y1); //move to starting point
            c.lineTo(x,y); //moves to ending point
            c.lineWidth=10; //sets the width of the line
            c.strokeStyle = 'rgba(70, 255, 33, .8)'; //sets the color
            c.stroke(); //draws what we laid out
            if (x1 <= x2 && y1 <=y2) { //checks if we have reached the end point
                if (x <x2) {x +=10;} //adds 10 to previous end x
                if (y <y2) {y +=10;}//adds 10 to previous end y
                if (x1 >= x2 && y1 >=y2) { cancelAnimationFrame(animationloop);} //nessesary for 6,4,2 win conditions
            }
            if (x1 <= x2 && y1 >=y2) {
                if (x <x2) {x +=10;}
                if (y >y2) {y -=10;}
                if (x1 >= x2 && y1 <=y2) { cancelAnimationFrame(animationloop);}
            }
        }
        function clear() { //clears canvas after win line is drawn 
            const animationloop = requestAnimationFrame(clear);
            c.clearRect(0, 0, 608, 608);//clears out canvas
            cancelAnimationFrame(animationloop);
        }

        disableclick(); //disables clicking while win sound is playing
        audio('sounds/winGame.mp3');
        animatelinedrawing(); //calls main animation loop
        setTimeout(function() {clear(); resetgame();}, 1000); //line wait 1 sec clears canvas resets game and allaows clicking 
    }

    function resetgame() { //resets the game if win or tie
        for (let i=0; i<9; i++) { //for loop for each html square element
            let square = document.getElementById(String(i)); //this gets the html element i
            square.style.backgroundImage = '';//removes elements in background image
        }
        selectedsquares = [];//resets the array
    }

