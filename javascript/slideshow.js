var plusButton = document.getElementsByClassName("plus")[0];
var minButton = document.getElementsByClassName("min")[0];
var myIndex = 0;
var time = 2000;
var timeout;

function goToSlide$() {
    $('.mySlides').each(function (index, element) {
        $(element).hide();
    });

    var numSlides = $('.mySlides').length;

    if (myIndex >= numSlides) {
        myIndex = 0;
    }
    if (myIndex < 0) {
        myIndex = numSlides - 1;
    }

    $('.mySlides').eq(myIndex).show();
}


function goToSlide() {
    var i;

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    if (myIndex >= x.length) {
        myIndex = 0;
    }
    if (myIndex < 0) {
        myIndex = x.length - 1;
    }

    x[myIndex].style.display = "block";
}

function minDivs() {
    myIndex--;
    goToSlide$();
    window.clearTimeout(timeout);
    timeout = setTimeout(carousel, time);
}

function plusDivs() {
    myIndex++;
    goToSlide$();
    window.clearTimeout(timeout);
    timeout = setTimeout(carousel, time);
}

function carousel() {
    myIndex++;
    goToSlide$();
    timeout = setTimeout(carousel, time);
}

//plusButton.addEventListener("click", plusDivs);
//minButton.addEventListener("click", minDivs);

$('.plus').click(plusDivs);
$('.min').click(minDivs);

carousel();
