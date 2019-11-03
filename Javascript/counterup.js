function animateValue(id, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

function modalCounter(){
    animateValue("modalGDA", 0, 250, 5000)
    animateValue("modalGDB", 0, 150, 5000)
    animateValue("modalGDAB", 0, 200, 5000)
    animateValue("modalGDO", 0, 350, 5000)
}

    animateValue("GdA", 0, 205, 5000);
    animateValue("GdB", 0, 191, 5000);
    animateValue("GdAB", 0, 75, 5000);
    animateValue("GdO", 0, 279, 5000);