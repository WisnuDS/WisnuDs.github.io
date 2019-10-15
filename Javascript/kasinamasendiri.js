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


// function showMoreBlood(){
//     var lessblood = document.querySelector('.bloodstock');
//     if (lessblood.style.display === "block"){
//         lessblood.style.display = "none";
//     } else{
//         lessblood.style.display = "block";
//     }
// }


let bloods = document.querySelector('.bloodstock');
let bloodspage = document.querySelector('#bloodstock');
let button = document.querySelector('.buttonformore');
button.addEventListener('click', function() {
    // if (bloods.style.display === "block"){
    //     bloods.style.display = "none";
    //     bloodspage.style.height = "1000px";
    // } else{
    //     bloods.style.display = "block";
    //     bloodspage.style.height = "650px";

    // }
    alert("under maintenance")
});


function showSchedule(){
}

let moresch = document.querySelector("#moreschedule");
// let schedule = document.querySelector('.tbcontent');
var schedule = document.getElementsByClassName('tbcontent');
// schedule[0].style.display = "none";
console.log(schedule.length);    
// alert(schedule.length);

moresch.addEventListener('click', function(){
    alert(schedule.length);
    alert("masuk");
    // alert(schedule.length);
    // if (schedule.style.display === "flex"){
    //     alert("true");
    //     for (i=4; i<= schedule.length; i++){
    //         schedule[i].style.display = "none";
    //     }
    //     // bloodspage.style.height = "1000px";
    // } else{
    //     alert("false");
    //     if (schedule.style.display === "none"){
    //         alert("false");
    //         for (i=4; i<= schedule.length; i++){
    //             schedule[i].style.display = "flex";
    //     }
    //     // schedule.style.display = "none";
    //     // schedule[0].style.height = "650px";

    // }
    // alert("under maintenance")}
}
)