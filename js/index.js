//index.html
var slideIndex = 1;
var slideIndex1 = 1;
var myTimer;
var myTimer1;

window.addEventListener("load", function () {
    showSlides(slideIndex);
    myTimer = setInterval(function () { plusSlides(1); }, 4000);
    showSlides1(slideIndex1);
    myTimer1 = setInterval(function () { plusSlides1(1); }, 4000);
});

function stop() {
    clearInterval(myTimer1);
}
function start() {
    myTimer1 = setInterval(function () { plusSlides1(1); }, 4000);
}

function currentSlide(n) {
    clearInterval(myTimer);
    showSlides(slideIndex = n);
    myTimer = setInterval(function () { plusSlides(1); }, 4000);
}

function plusSlides(n) {
    clearInterval(myTimer);
    if (n == 1) {
        showSlides(slideIndex += 1);
        myTimer = setInterval(function () { plusSlides(1); }, 4000);
    }
    else if (n == -1) {
        showSlides(slideIndex -= 1);
        myTimer = setInterval(function () { plusSlides(1); }, 4000);
    }
}

function plusSlides1(n) {
    clearInterval(myTimer1);
    if (n == 1) {
        showSlides1(slideIndex1 += 1);
        myTimer1 = setInterval(function () { plusSlides1(1); }, 4000);
    }
    else if (n == -1) {
        showSlides1(slideIndex1 -= 1);
        myTimer1 = setInterval(function () { plusSlides1(1); }, 4000);
    }
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace("act", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " act";
}
function showSlides1(n) {
    var i;
    var slides1 = document.getElementsByClassName("mySlides1");
    if (n > slides1.length) {
        slideIndex1 = 1;
    }
    if (n < 1) {
        slideIndex1 = slides1.length;
    }
    for (i = 0; i < slides1.length; i++) {
        slides1[i].style.visibility = "hidden";
    }
    slides1[slideIndex1 - 1].style.visibility = "visible";
}
