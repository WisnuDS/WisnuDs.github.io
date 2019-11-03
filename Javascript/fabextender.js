var extended = true;
function extendfab(){
    var fabutton = document.getElementsByClassName('eachbutton');
    var fab = document.getElementById("fabextender");
    if (extended == false) {
        fab.style.transform = 'rotate(45deg)';
        extended = true;
        for (var i =1; i <= fabutton.length; i++) {
            fabutton[i].style.display = 'flex';    
        } 
    } else{
        fab.style.transform = 'rotate(0deg)';
        extended = false;
        for (var i =1; i <= fabutton.length; i++) {
            fabutton[i].style.display = 'none';    
        }
    }
}