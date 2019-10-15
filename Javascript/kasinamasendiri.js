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
// console.log(schedule.length);    
// var schedule = document.getElementsByClassName('tbcontent');
let schedule = document.querySelector('.tbcontent');
var schedul = document.getElementsByClassName("tbcontent");
// alert(schedul);
// alert(schedule);
// alert(schedule.length);

function hideelement(){
    for (i=4; i<= schedul.length; i++){
        schedul[i].style.display = "none";
    } 
}
// hideelement();

moresch.addEventListener('click', function(){
    var i;
    alert("masuk");
    // for (i=2; i<=schedul.length; i++){
    //     schedul[i].style.display = "none";
    // }
    if (schedul[1].style.display === 'none'){
        alert("true");
        for (i=2; i<= schedul.length; i++){
            schedul[i].style.display = 'none';
        }
        // schedul[3].style.display = "none";
    } else if (schedul[4].style.display = "flex") {
        alert("false");
        for (i=4; i<= schedul.length; i++){
            schedul[i].style.display = "none";
        }
    } 
        
    
        
        // schedul.style.display = "flex";
    
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
    //         }
    //     // schedule.style.display = "none";
    //     // schedule[0].style.height = "650px";
    //     }}
    alert("under maintenance")
    
})

// moresch.addEventListener('click', function(){
//     alert(schedule.length);
//     alert("masuk");
//     for (i=1; i<= schedule.length; i++){
//     schedule[i].style.display = "none";}
// });


function openpage(){
    alert("halaman ini sedang dalam masa perkembangan");
    document.getElementById("maintenance").style.display = "none";
    
}

var openbutton = document.getElementsByClassName("keepliat");
// openbutton.addEventListener('click',function(){
//     maintenancepage.style.display = "none";
// })