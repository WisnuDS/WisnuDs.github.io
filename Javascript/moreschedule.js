
let moresch = document.querySelector("#moreschedule");
let schedule = document.querySelector('.tbcontent');
var schedul = document.getElementsByClassName("tbcontent");

moresch.addEventListener('click', function(){
    var i;
    if (schedul[4].style.display == 'none'){
        document.getElementById("moreee").innerHTML = "tampilkan lebih sedikit";
        for (i=4; i<= schedul.length; i++){
            schedul[i].style.display = 'flex';
        }
    } else if (schedul[4].style.display == "flex") {
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
