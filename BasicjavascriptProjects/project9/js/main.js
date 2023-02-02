function countdown() {
    var seconds = document.getElementById("seconds").value;
    function tick() {1
        seconds = seconds -1;
        timer.innerHTML - seconds;
         var time = setTimeout(tick,1000);
        if (seconds == -1) {
            alert("times up");
            clearTimeout(time);
            timer.innerHTML = ""
        }
    }
    tick();
}

let slideIndex = 1;
showslides(slideIndex);

//next and prev controls
function plusslides(n) {
    showslides(slideIndex += n);
}

//thumbnail image
function currentslide(n) {
    showslides(slideIndex = n);
}

function showslides(n) {
    let i;
    let slides = document.getElementsByClassName("myslides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}