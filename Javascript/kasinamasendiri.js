var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
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


let bloods = document.querySelector('.bloodstock');
let bloodspage = document.querySelector('#bloodstock');
let button = document.querySelector('.buttonformore');
button.addEventListener('click', function() {
    alert("under maintenance")
});


function showSchedule(){
}

let moresch = document.querySelector("#moreschedule");
let schedule = document.querySelector('.tbcontent');
var schedul = document.getElementsByClassName("tbcontent");

moresch.addEventListener('click', function(){
    var i;
    if (schedul[4].style.display === 'none'){
        document.getElementById("moreee").innerHTML = "tampilkan lebih sedikit";
        for (i=4; i<= schedul.length; i++){
            schedul[i].style.display = 'flex';
        }
    } else if (schedul[4].style.display = "flex") {
        document.getElementById("moreee").innerHTML = "tampilkan lebih banyak";
        for (i=4; i<= schedul.length; i++){
            schedul[i].style.display = "none";
        }
    } 

    alert("under maintenance")
    
})

function less(){
    for (i=4; i<= schedul.length; i++){
        schedul[i].style.display = "none";
    }
}
less();
function openpage(){
    alert("halaman ini sedang dalam masa perkembangan");
    document.getElementById("maintenance").style.display = "none";
    
}

var openbutton = document.getElementsByClassName("keepliat");