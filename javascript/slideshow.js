/**
 * Created by Roy on 28/06/16.
 */



var myIndex = 1;

function plusDivs(n) {
    carousel(myIndex += n);
}

carousel();

function carousel(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");

    //if (n > x.length) {slideIndex = 1}
    //if (n < 1) {slideIndex = x.length}

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 2000); 
}


