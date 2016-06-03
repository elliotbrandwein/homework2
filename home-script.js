var elements = document.getElementsByClassName("hideable");
var vis = getVisible(elements) + 1;
console.log("working");
function toggleSlide(direction) {
    console.log("button pressed");
    // gets all the "slides" in our slideshow
    var elements = document.getElementsByClassName("hideable"); 
    // Find the LI that's currently displayed
    var visibleID = getVisible(elements);

    elements[visibleID].style.display = "none"; // hide the currently visible LI
    if(!direction) {
        var makeVisible = prev(visibleID, elements.length); // get the previous slide
    } else {
        var makeVisible = next(visibleID, elements.length); // get the next slide
    }
    elements[makeVisible].style.display = "block"; // show the previous or next slide
    var sn = document.getElementById("slideNumber");
    sn.innerHTML = (makeVisible + 1);
}
function getVisible(elements) {
    var visibleID = -1;
    for(var i = 0; i < elements.length; i++) {
        if(elements[i].style.display == "block") {
            visibleID = i;
        }
    }
    return visibleID;
}
 
function prev(num, arrayLength) {
    if(num == 0) return arrayLength-1;
    else return num-1;
}
 
function next(num, arrayLength) {
    if(num == arrayLength-1) return 0;
    else return num+1;
}