const slide = document.querySelector("#imgSlide")

var i = 0;
var images = ['1.jpg', '2.jpg', '3.jpg']

changeImg()

function changeImg()
{
    slide.style.backgroundImage = "url('./slideshow/" + images[i] + "')";

    if (i < images.length - 1){
        i++;
    }
    else{
        i = 0;
    }

    setTimeout("changeImg()", 5000);
}